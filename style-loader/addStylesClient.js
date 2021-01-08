
// 目前只提供了一种，直接在浏览器中利用style标签插入样式

export default function addStylesClient(parentId, list, isQuickPaperStyle) {

    var styleElement = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];

    var style = "",
        i;
    for (i = 0; i < list.length; i++) {
        style += "\n/* " + list[i][0] + " */\n";
        style += list[i][1] + "\n\n";
    }

    // 如果是QuickPape内置样式，添加data-quickpape-hash
    if (isQuickPaperStyle) {

        style = style.replace(/( {0,}){/g, "{");
        style = style.replace(/( {0,}),/g, ",");

        var temp = "";
        var isSpecial = false, isContent = false;
        for (var i = 0; i < style.length; i++) {
            if (style[i] == '{' && !isSpecial) {
                isContent = true;
                temp += "[" + parentId + "]";
            } else if (style[i] == '}' && !isSpecial) {
                isContent = false;
            } else if (style[i] == '/' && style[i + 1] == '*') {
                isSpecial = true;
            } else if (style[i] == '*' && style[i + 1] == '/') {
                isSpecial = false;
            } else if (style[i] == ',' && !isSpecial && !isContent) {
                temp += "[" + parentId + "]";
            }

            temp+=style[i];

        }

        style=temp;

    }

    styleElement.innerHTML = style;
    styleElement.setAttribute('type', 'text/css');
    head.appendChild(styleElement);

};
