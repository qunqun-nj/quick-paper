/**
 * 备注：
 * $$开头的表示内部方法，__开头的表示内部资源
 * $开头的表示对外暴露的内置方法，_开头表示的是对外只读的内置资源
 * =========================================
 * 整合全部资源，对外暴露调用接口
 */

import QuickPaper from './core/instance/index';
import initGlobalAPI from './core/global-api/index';
import { isFunction } from '@hai2007/tool/type';

// 挂载全局方法
initGlobalAPI(QuickPaper);

// 挂载内置指令
import qBind from './module/directive/q-bind'; QuickPaper.directive('qBind', qBind);
import qOn from './module/directive/q-on'; QuickPaper.directive('qOn', qOn);
import qModel from './module/directive/q-model'; QuickPaper.directive('qModel', qModel);
import qCode from './module/directive/q-code'; QuickPaper.directive('qCode', qCode);

// 挂载内置组件
import component from './module/component/component'; QuickPaper.component('component', component);

// 挂在内置方法
import urlFormat from './module/method/urlFormat';; QuickPaper.urlFormat = urlFormat;

// 把组件挂载到页面中去
QuickPaper.prototype.$$mount = function () {

    if (isFunction(this._options.render)) {

        // 记录render
        // 这样写是为了方便后期如何对render添加兼容好改造
        this.$$render = this._options.render;

        // 准备好以后挂载
        this.$$mountComponent();

    } else {
        throw new Error("options.render needs to be a function");
    }

};

// 根据运行环境，导出接口
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = QuickPaper;
} else {
    window.QuickPaper = QuickPaper;
}
