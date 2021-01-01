
// 组件的生命周期

import { isFunction } from '@hai2007/tool/type';

export function lifecycleMixin(QuickPaper) {

    // 生命周期调用钩子
    // 整个过程，进行到对应时期，都需要调用一下这里对应的钩子
    // 整合在一起的目的是方便维护
    QuickPaper.prototype.$$lifecycle = function (callbackName) {

        // beforeCreate
        if (isFunction(callbackName)) {
            callbackName();
            return;
        }

        if ([

            // 创建组件
            'created',

            // 挂载组件
            'beforeMount', 'mounted',

            // 更新组件
            'beforeUpdate', 'updated',

            // 销毁组件
            'beforeDestroy', 'destroyed'

        ].indexOf(callbackName) > -1 && isFunction(this._options[callbackName])) {
            this._options[callbackName].call(this);
        }

    };

};
