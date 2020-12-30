"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
* quick-paper v0.0.0-alpha
* (c) 2019-2020 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/
(function () {
  'use strict';

  var QuickPaper; // 根据运行环境，导出接口

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = QuickPaper;
  } else {
    window.QuickPaper = QuickPaper;
  }
})();