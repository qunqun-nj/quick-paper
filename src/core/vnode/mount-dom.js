
import { templateToName } from '../../tools/helper';
import { evalExpress } from '@hai2007/algorithm/value';
import { replaceDom } from '../../tools/xhtml';

// 挂载结点的任务主要有以下内容：
// 1.生成真实dom并挂载好
// 2.收集指令，过滤器和组件信息（根据全局和局部的，进行抽取和校验），在数据更新的时候启动更新
// 3.当前组件和父亲组件，包括子组件，还有事件等，在必要的时候挂载或启动，还有什么时候应该销毁等信息的登记

function mountDom(that, key, pEl, QuickPaper) {

    let vnode = evalExpress(that, key), el;

    if (!vnode) {
        console.error('vnode is undefined!');
        return;
    }

    // 如果是none，需要提前分类
    if (vnode.type == 'none') {
        let ttc = templateToName(vnode.tagName);
        if (that.__componentLib[ttc] || that.__componentLib_scope[ttc]) {
            vnode.options = that.__componentLib[ttc] || that.__componentLib_scope[ttc];
            vnode.type = 'component';
        } else {
            vnode.type = 'tag';
        }
    }

    // 1.组件
    if (vnode.type == 'component') {

        el = document.createElement('quick-paper-component');
        pEl.appendChild(el);
        vnode.options.el = el;
        if (!('render' in vnode.options)) vnode.options.render = createElement => createElement('quick-paper-component', {}, []);

        // 这相当于子组件，挂载好了以后，启动即可
        vnode.instance = new QuickPaper(vnode.options);
        vnode.instance.__parent = that;

        // 校对组件上的属性
        let attrs = {};
        for (let key in vnode.attrs) {
            if (!/^data-quickpaper-/.test(key)) {

                if (/^:/.test(key)) {
                    attrs[key.replace('q-bind' + key)] = vnode.attrs[key];
                } else if (/^@/.test(key)) {
                    attrs[key.replace(key.replace(/^@/, 'q-on:'))] = vnode.attrs[key];
                } else {
                    attrs[key] = vnode.attrs[key];
                }

            }
        }

        let component = {
            attrs,
            instance: vnode.instance
        };

        // 对于内置的动态组件进行调用，其余的组件当前是隔绝的
        if (component.instance._name == "component") {
            let pageKey = component.attrs['q-bind:is'];
            component.instance.lister(QuickPaper, that[pageKey]);
        }

        // 记录组件
        that.__componentTask.push(component);

    }

    // 2.普通标签
    else if (vnode.type == 'tag') {

        el = document.createElement(vnode.tagName);
        if (pEl.nodeName == 'Quick-Paper-COMPONENT' || pEl._nodeName == 'Quick-Paper-COMPONENT') {

            // 作为临时占位的结点，我们应该替换而不是追加
            replaceDom(pEl, el);
            that._el = el;

        } else {
            pEl.appendChild(el);
        }

        /**
         * 组件的属性，包括通过属性传递数据等先不考虑
         * 我们目前只支持普通标签上的指令
         */

        for (let key in vnode.attrs) {
            let value = vnode.attrs[key];
            let names = (key + ":").split(':');
            let directive = that.__directiveLib[templateToName(names[0])] || that.__directiveLib_scope[templateToName(names[0])];

            // 如果是指令
            if (directive) {
                that.__directiveTask.push({
                    el,
                    ...directive,
                    value,
                    type: names[1]
                });
            }

            // 普通属性的话，直接设置即可
            else {
                el.setAttribute(key, value);
            }
        }

        // 挂载好父亲以后，挂载孩子
        for (let i = 0; i < vnode.children.length; i++) {
            mountDom(that, key + ".children[" + i + "]", el, QuickPaper);
        }
    }

    // 3.普通文本
    else if (vnode.type == 'text') {

        el = document.createTextNode("");
        el.textContent = vnode.content.replace(/↵/g, '\n');
        pEl.appendChild(el);

    }

    // 4.绑定文本
    else if (vnode.type == 'bindText') {

        el = document.createTextNode("");
        el.textContent = evalExpress(that, vnode.content).replace(/↵/g, '\n');

        pEl.appendChild(el);

        that.__bindTextTask.push({
            el,
            content: vnode.content
        });

    }

    // 其它应该抛错
    else {
        console.error('Type not expected：' + vnode.type);
    }
};

export default mountDom;
