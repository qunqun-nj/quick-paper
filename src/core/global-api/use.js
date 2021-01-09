export default function (QuickPaper) {

    // 补充原型方法
    QuickPaper.use = function (extend) {
        extend.install.call(extend, QuickPaper);
    };

};
