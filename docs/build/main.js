!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(c=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(i).concat([r]).join("\n")}var c;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var c=t[r];null!=c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e,n){"use strict";function o(t,e,n){var o=document.createElement("style"),r=document.head||document.getElementsByTagName("head")[0],i="";for(l=0;l<e.length;l++)i+="\n/* "+e[l][0]+" */\n",i+=e[l][1]+"\n\n";if(n){i=(i=i.replace(/( {0,}){/g,"{")).replace(/( {0,}),/g,",");for(var c="",u=!1,a=!1,l=0;l<i.length;l++)"{"!=i[l]||u?"}"!=i[l]||u?"/"==i[l]&&"*"==i[l+1]?u=!0:"*"==i[l]&&"/"==i[l+1]?u=!1:","!=i[l]||u||a||(c+="["+t+"]"):a=!1:(a=!0,c+="["+t+"]"),c+=i[l];i=c}o.innerHTML=i,o.setAttribute("type","text/css"),r.appendChild(o)}n.r(e),n.d(e,"default",(function(){return o}))},function(t,e,n){"use strict";(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
* quick-paper v0.0.0-alpha
* (c) 2019-2021 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/!function(){var n=Object.prototype.toString;function o(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":n.call(t)}var r=function(t,n){return null!==n&&"object"===e(n)&&t.indexOf(n.nodeType)>-1&&!function(t){if(null===t||"object"!==e(t)||"[object Object]"!=o(t))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}(n)},i=function(t){if(!function(t){var n=e(t);return null!=t&&("object"===n||"function"===n)}(t))return!1;var n=o(t);return"[object Function]"===n||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object Proxy]"===n};function c(t){if(!(this instanceof c))throw new Error("QuickPaper is a constructor and should be called with the `new` keyword");var e;this._name=t.name||"noname",this.$$lifecycle(t.beforeCreate),this.$$init(t),this.$$lifecycle("created"),e=this._el,r([1,9,11],e)&&this.$$mount()}!function(t){t.prototype.$$init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._options=t}}(c),function(t){t.prototype.$$lifecycle=function(t){i(t)?t():["created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed"].indexOf(t)>-1&&i(this._options[t])&&this._options[t].call(this)}}(c),c.prototype.$$mount=function(){},"object"===e(t)&&"object"===e(t.exports)?t.exports=c:window.QuickPaper=c}()}).call(this,n(5)(t))},function(t,e,n){t.exports=n(10)},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(2).default)("data-quickpaper-12ddbf8e",o,!1)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"/*!\r\n * 👁️ - 统一不同浏览器的基础样式\r\n * https://github.com/hai2007/style.css/blob/master/normalize.css\r\n *\r\n * author hai2007 < https://hai2007.gitee.io/sweethome >\r\n *\r\n * Copyright (c) 2020-present hai2007 走一步，再走一步。\r\n * Released under the MIT license\r\n */html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.15}button,input{border:1px solid #b2b2bd}article,footer,header,nav,section{display:block}canvas,svg{display:inline-block}*{box-sizing:border-box}::-ms-clear,::-ms-reveal{display:none}img{display:inline-block}html{font-family:sans-serif}a{text-decoration:none}li{list-style-type:none}ul,ol,li,p,h1,h2,h3,h4,h5,h6{-webkit-margin-before:0;-webkit-margin-after:0;-webkit-padding-start:0;margin-block-end:0;margin-block-start:0;padding-inline-start:0;padding:0;margin:0}body{margin:0}table{border-collapse:collapse}\n",""])},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(2).default)("data-quickpaper-29e77684",o,!0)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".quickpaper{color:red}\n",""])},function(t,e,n){"use strict";n.r(e);var o=n(3),r=n.n(o),i=(n(6),n(0)),c=n.n(i);n(8);c.a.render=function(t){return t(div,{class:"quickpaper"},["Quick Paper"])};var u=c.a;console.log(u),window.quickPaper=new r.a({el:document.getElementById("root"),render:u})}]);