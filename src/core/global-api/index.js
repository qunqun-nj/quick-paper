
// 挂载全局方法

import mount from './mount';
import use from './use';

import OpenWebEditor from 'open-web-editor';

export default function (QuickPaper) {

    // 登记扩展内容
    QuickPaper.prototype.__directiveLib = {};
    QuickPaper.prototype.__componentLib = {};

    QuickPaper.prototype.__OpenWebEditor = OpenWebEditor;
    QuickPaper.__OpenWebEditor = OpenWebEditor;

    // 挂载
    mount(QuickPaper);
    use(QuickPaper);

};
