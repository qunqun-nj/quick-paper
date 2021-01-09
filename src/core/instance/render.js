
import createElement from '../vnode/create-element';
import mountDom from '../vnode/mount-dom';
import watcher from '../observe/watcher';
import { isFunction } from '@hai2007/tool/type';
import { evalExpress } from '@hai2007/algorithm/value';

export function renderMixin(QuickPaper) {

    // 根据render生成dom挂载到挂载点
    // 并调用watcher启动数据监听
    // 并调用events方法开启@事件注册
    // 并记录其中的组件，指令和{{}}等
    QuickPaper.prototype.$$mountComponent = function () {
        this.$$lifecycle('beforeMount');

        /**
         * 挂载的意义就是由当前组件来管理和调度一片区域
         */

        // 获取虚拟结点
        this._vnode = this.$$render(createElement);

        this.__directiveTask = [];
        this.__componentTask = [];
        this.__bindTextTask = [];

        // 以指令为例，指令在挂载的真实DOM销毁的时候，应该主动销毁自己
        // 类似这样的管理应该由指令自己提供
        mountDom(this, '_vnode', this._el, QuickPaper);

        // 执行指令：inserted
        for (let i = 0; i < this.__directiveTask.length; i++) {
            let directive = this.__directiveTask[i];
            if (isFunction(directive.inserted)) {
                let directiveValue;
                try {
                    directiveValue = evalExpress(this, directive.value);
                } catch (e) { }
                directive.inserted(directive.el, {
                    target: this,
                    exp: directive.value,
                    value: directiveValue,
                    type: directive.type
                });
            }
        }

        // 挂载好了以后，启动监听
        watcher(this);

        // 标记已经挂载
        this.__isMounted = true;
        this.$$lifecycle('mounted');
    };

    // 第一次或数据改变的时候，更新页面
    QuickPaper.prototype.$$updateComponent = function () {
        this.$$lifecycle('beforeUpdate');

        // 执行指令：update
        for (let i = 0; i < this.__directiveTask.length; i++) {
            let directive = this.__directiveTask[i];
            if (isFunction(directive.update)) {
                let directiveValue;
                try {
                    directiveValue = evalExpress(this, directive.value);
                } catch (e) { }
                directive.update(directive.el, {
                    target: this,
                    exp: directive.value,
                    value: directiveValue,
                    type: directive.type
                });
            }
        }

        // 更新{{}}
        for (let i = 0; i < this.__bindTextTask.length; i++) {
            let bindText = this.__bindTextTask[i];
            let content = evalExpress(this, bindText.content).replace(/↵/g, '\n');
            if (bindText.el.textContent != content) {
                bindText.el.textContent = content;
            }
        }

        // 更新组件挂载点的属性
        for (let i = 0; i < this.__componentTask.length; i++) {
            let component = this.__componentTask[i];

            // 对于内置的动态组件进行调用，其余的组件当前是隔绝的
            if (component.instance._name == "component") {
                let pageKey = component.attrs['q-bind:is'];
                component.instance.lister(QuickPaper, this[pageKey]);
            }
        }

        this.$$lifecycle('updated');
    };

    // 销毁组件，释放资源
    QuickPaper.prototype.$$destroyComponent = function () {
        this.$$lifecycle('beforeDestroy');

        // 执行指令：delete
        for (let i = 0; i < this.__directiveTask.length; i++) {
            let directive = this.__directiveTask[i];
            if (isFunction(directive.delete)) {
                directive.delete(directive.el, {
                    target: this,
                    exp: directive.value,
                    value: evalExpress(this, directive.value),
                    type: directive.type
                });
            }
        }

        this.$$lifecycle('destroyed');
    };

};
