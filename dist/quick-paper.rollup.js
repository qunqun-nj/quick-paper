/*!
* quick-paper v0.0.0-alpha
* (c) 2019-2020 你好2007 git+https://github.com/hai2007/quick-paper.git
* License: MIT
*/

(function () {
  'use strict';

  let QuickPaper;

  // 根据运行环境，导出接口
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = QuickPaper;
  } else {
    window.QuickPaper = QuickPaper;
  }

}());
