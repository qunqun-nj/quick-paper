import QuickPaper from 'quick-paper';

// 引入样式
import '@hai2007/style/normalize.css';

import App from './App.paper';

console.log(App);

//根对象
window.quickPaper = new QuickPaper({

    //挂载点
    el: document.getElementById('root'),

    // 启动页面
    render: App

});
