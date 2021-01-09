
import OpenWebEditor from 'open-web-editor';

export default {
    inserted: (el, binding) => {
        let code = el.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        new OpenWebEditor({

            // 编辑器挂载点
            el,

            // 初始化文本
            content: code,

            // 是否只读
            readonly: true,

            // 着色语言
            shader: [binding.exp || 'javascript'],

            // 设置颜色
            color: {
                background: "rgb(239, 235, 234)", /*编辑器背景*/
                text: "#000000", /*文本颜色*/
                number: "#888484", /*行号颜色*/
                edit: "#eaeaf1", /*编辑行背景色*/
                cursor: "#ff0000", /*光标颜色*/
                select: "gray", /*选择背景*/
            },

            // 是否隐藏行号
            // 如果只有一行，就不显示行号(编辑界面一定显示)
            noLineNumber: !/\n/.test(code)

        });

    }
};
