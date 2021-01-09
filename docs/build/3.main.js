(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{16:function(a,e,d){var p=d(17);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,d(1).default)("data-quickpaper-19625dd4",p,!0)},17:function(a,e,d){(a.exports=d(0)(!1)).push([a.i,"",""])},26:function(a,e,d){"use strict";d.r(e);var p={};d(16);p.render=function(a){return a("div",{class:"quickpaper","data-quickpaper-19625dd4":""},[a("div",{class:"doc-view","data-quickpaper-19625dd4":""},[a("h2",{"data-quickpaper-19625dd4":""},["写在前面"]),a("h3",{"data-quickpaper-19625dd4":""},["什么是Quick Paper?"]),a("p",{"data-quickpaper-19625dd4":""},["首先需要理解的是设计理念：网站由一个个Quick Paper组件平行或嵌套拼接而成的，每个组件管理页面中的一部分，组件之间可以通信。"]),a("p",{"data-quickpaper-19625dd4":""},["Quick Paper管理的区域里面你可以使用原生的标签和内置或扩展的东西，而这其中最重要的东西就是组件。"]),a("h3",{"data-quickpaper-19625dd4":""},["组件是什么？"]),a("p",{"data-quickpaper-19625dd4":""},["创建组件对象的方式大致可以分为两种：主动创建和作为标签被动创建。后者就好像在页面中添加一个input框或者img标签一样，而如何定义这个标签，我们稍后就会说明。"]),a("p",{"data-quickpaper-19625dd4":""},["一般情况下，至少有一个组件对象需要主动创建（一般是根对象），就像下面这样："]),a("pre",{"q-code":"","data-quickpaper-19625dd4":""},["new QuickPaper({↵↵    // 挂载点↵    el:dom,↵↵    // 视图↵    render:creatFunction↵↵    // 方法↵    methods:{}↵↵    // 双向绑定数据↵    data(){↵        return {};↵    },↵↵    // 生命周期↵    'created':callback,↵    'beforeMount':callback,↵    'mounted':callback,↵    'beforeUpdate':callback,↵    'updated':callback,↵    'beforeDestroy':callback,↵    'destroyed':callback,↵↵    // 挂载局部指令或组件↵    directive:{},↵    component:{}↵↵});"]),a("p",{"data-quickpaper-19625dd4":""},["创建一个组件也就意味着页面中的一个区域交由它来管理，是不是很简单，接着，我们来说说几个比较重要的点："]),a("h3",{"data-quickpaper-19625dd4":""},["render函数"]),a("p",{"data-quickpaper-19625dd4":""},["我们的页面其实可以看出字符串模板template，最终会被解析成render，表示当前组件管理的视图，我们就来看看render是什么？"]),a("p",{"data-quickpaper-19625dd4":""},["假如我们有一个template如下："]),a("pre",{"q-code":"html","data-quickpaper-19625dd4":""},["<div>↵    <label>QuickPaper</label>↵    <p class='content'>一个渐进型的前端小框架</p>↵</div>"]),a("p",{"data-quickpaper-19625dd4":""},["转换成render函数以后就是："]),a("pre",{"q-code":"","data-quickpaper-19625dd4":""},["render:function(createElement){↵    return createElement('div',{},[↵        createElement('label',{},['QuickPaper']),↵        createElement('p',{class:'content'},['一个渐进型的前端小框架'])↵    ]);↵}"]),a("h3",{"data-quickpaper-19625dd4":""},["自定义组件"]),a("p",{"data-quickpaper-19625dd4":""},["template（或者说render）中可以包含组件来加强原生标签的功能，如何定义一个组件（也就是上面提到的自定义标签）？"]),a("pre",{"q-code":"","data-quickpaper-19625dd4":""},["QuickPaper.component('tagName',options);"]),a("p",{"data-quickpaper-19625dd4":""},["其中options和new QuickPaper(options)是一致的，只不过el属性不需要传递了，使用的时候这样："]),a("pre",{"q-code":"html","data-quickpaper-19625dd4":""},["<tag-name></tag-name>"]),a("p",{"data-quickpaper-19625dd4":""},["或"]),a("pre",{"q-code":"html","data-quickpaper-19625dd4":""},["<tag-name />"]),a("p",{"data-quickpaper-19625dd4":""},["这样定义的组件是全局的，如果你希望定义的组件只在当前组件中有效，可以这样挂载："]),a("pre",{"q-code":"","data-quickpaper-19625dd4":""},['new QuickPaper(↵    ...↵    component:{↵        "tagName":option↵    }↵);'])])])};e.default=p}}]);