/**
 * 备注：
 * $$开头的表示内部方法，__开头的表示内部资源
 * $开头的表示对外暴露的内置方法，_开头表示的是对外只读的内置资源
 * =========================================
 * 整合全部资源，对外暴露调用接口
 */

import QuickPaper from './core/instance/index';
import initGlobalAPI from './core/global-api/index';

// 挂载全局方法
initGlobalAPI(QuickPaper);

// 把组件挂载到页面中去
QuickPaper.prototype.$$mount = function () {

};

// 根据运行环境，导出接口
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = QuickPaper;
} else {
    window.QuickPaper = QuickPaper;
}
