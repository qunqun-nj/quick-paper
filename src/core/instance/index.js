
// QuickPaper对象

import { initMixin } from './init';
import { lifecycleMixin } from './lifecycle';
import { renderMixin } from './render';
import { isElement } from '@hai2007/tool/type';

function QuickPaper(options) {
    if (!(this instanceof QuickPaper)) {
        throw new Error('QuickPaper is a constructor and should be called with the `new` keyword');
    }

    this._name = options.name || "noname";

    this.$$lifecycle(options.beforeCreate);

    // 初始化对象
    this.$$init(options);

    this.$$lifecycle('created');

    // 如果没有设置挂载点
    // 表示该组件不挂载
    // 不挂载的话，render或template也不会去解析
    // 或许可以在一定阶段以后，再主动去挂载，这样有益于提高效率
    if (isElement(this._el)) {

        // 挂载组件到页面
        this.$$mount();

    }

}

// 混入几大核心功能的处理方法

initMixin(QuickPaper);// 初始化对象
lifecycleMixin(QuickPaper);// 和组件的生命周期相关调用
renderMixin(QuickPaper);// 组件渲染或更新相关

export default QuickPaper;
