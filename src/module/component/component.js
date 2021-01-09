export default {
    name: "component",
    data() {
        return {
            is: null
        };
    },
    methods: {
        lister(QuickPaper, newIS) {

            // 如果动态组件没有改变
            if (newIS == this.is || newIS == null) return;

            let oldComponent = this._oldComponent;
            if (oldComponent) oldComponent.$$lifecycle("beforeDestroy");

            this.is = newIS;

            let options = newIS;
            options.el = this._el;

            // 标记替换而不是追加
            options.el._nodeName = 'Quick-Paper-COMPONENT';

            // 重定向挂载点
            this._oldComponent = new QuickPaper(options);
            this._el = this._oldComponent._el;

            if (oldComponent) {
                oldComponent.$$lifecycle("destroyed");
                oldComponent = null;
            }

        }
    }
};
