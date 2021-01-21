(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{22:function(a,e,p){var i=p(23);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,p(1).default)("data-quickpaper-78984bae",i,!0)},23:function(a,e,p){(a.exports=p(0)(!1)).push([a.i,"",""])},29:function(a,e,p){"use strict";p.r(e);var i={};p(22);i.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-78984bae":""},[a("h2",{"data-quickpaper-78984bae":""},["单一的内置指令"]),a("p",{"data-quickpaper-78984bae":""},["对于一些常用的加强属性Quick Paper内置提供了实现，具体如下："]),a("h3",{"data-quickpaper-78984bae":""},["q-model:双向绑定，一般用于输入框，可以实现视图和数据之间的同步"]),a("pre",{"q-code":"html","data-quickpaper-78984bae":""},["<input q-model='param'/>"]),a("p",{"data-quickpaper-78984bae":""},["其中param需要提前在data中注册（下同）。"]),a("h3",{"data-quickpaper-78984bae":""},["q-bind:单项数据绑定，只会主动同步数据到视图"]),a("pre",{"q-code":"html","data-quickpaper-78984bae":""},["<div q-bind='param' q-bind:param='param'></div>"]),a("p",{"data-quickpaper-78984bae":""},["上面我们演示了两种用法，第一种会修改标签的value或innerText,第二种会修改标签的param属性。"]),a("p",{"data-quickpaper-78984bae":""},["再来看个例子："]),a("pre",{"q-code":"html","data-quickpaper-78984bae":""},["<div>{{param}}</div>"]),a("p",{"data-quickpaper-78984bae":""},["上面的写法类似q-bind的第一种用法。"]),a("h3",{"data-quickpaper-78984bae":""},["q-on:用于在标签中注册DOM事件"]),a("pre",{"q-code":"html","data-quickpaper-78984bae":""},["<div q-on:click='doit()'>点击我</div>"]),a("p",{"data-quickpaper-78984bae":""},["上面我们演示的是单击，如果把.click改成.dblclick就是双击，别的DOM事件也类似。"]),a("p",{"data-quickpaper-78984bae":""},["除此之外，还有几个特殊的选项（可以同时使用）："]),a("pre",{"q-code":"html","data-quickpaper-78984bae":""},["<div q-on:click.once='doit()'>点击我</div>"]),a("p",{"data-quickpaper-78984bae":""},["上面我们添加了.once，表示点击一次后就会失效,一共有以下可选："]),a("ol",{"data-quickpaper-78984bae":""},[a("li",{"data-quickpaper-78984bae":""},["prevent 阻止默认事件"]),a("li",{"data-quickpaper-78984bae":""},["stop 阻止冒泡"]),a("li",{"data-quickpaper-78984bae":""},["once 只执行一次"])]),a("p",{"data-quickpaper-78984bae":""},["有时候为了方便，q-on.可以用@代替，比如开始的例子改写一下："]),a("pre",{"q-code":"html","data-quickpaper-78984bae":""},["<div @click='doit()'>点击我</div>"]),a("h3",{"data-quickpaper-78984bae":""},["q-code:用于提供代码显示"]),a("p",{"data-quickpaper-78984bae":""},["比如你想显示个打印语句：console.log('你好');"]),a("pre",{"q-code":"","data-quickpaper-78984bae":""},["<pre q-code>console.log('你好');</pre>"]),a("p",{"data-quickpaper-78984bae":""},["如果你知道你需要显示的代码是什么语言，你还可以进行指定语言类型，比如上面的是一个js:"]),a("pre",{"q-code":"","data-quickpaper-78984bae":""},["<pre q-code='javascript'>console.log('你好');</pre>"]),a("p",{"data-quickpaper-78984bae":""},["我们目前支持的语言类型如下："]),a("ol",{"data-quickpaper-78984bae":""},[a("li",{"data-quickpaper-78984bae":""},["html:可以显示标签类型的，比如.vue文件，xml等。"]),a("li",{"data-quickpaper-78984bae":""},["css:样式类型的文件。"]),a("li",{"data-quickpaper-78984bae":""},["javascript:默认值，是为js提供的，不过大部分情况下，都可以正常使用。"])])])};e.default=i}}]);