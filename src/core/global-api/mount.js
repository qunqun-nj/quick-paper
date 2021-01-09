export default function (QuickPaper) {

    // 挂载指令
    QuickPaper.directive = function (name, options) {

        /*
         [生命周期]
          1.inserted:指令生效的时候
          2.update:被绑定于元素所在的组件中有数据更新时调用，而无论绑定值是否变化
          3.delete:只调用一次，指令与元素解绑时调用
        */
        QuickPaper.prototype.__directiveLib[name] = options;

    };

    // 挂载组件
    QuickPaper.component = function (name, options) {

        QuickPaper.prototype.__componentLib[name] = options;

    };

};
