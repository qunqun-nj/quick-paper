
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
        // 分别表示：是否处于注释中、是否处于内容中、是否由于特殊情况在遇到{前完成了hash
        var isSpecial = false, isContent = false, hadComplete = false;
        for (var i = 0; i < style.length; i++) {
            if (style[i] == ':' && !isSpecial && !hadComplete && !isContent) {
                hadComplete = true;
                temp += "[" + parentId + "]";
            } else if (style[i] == '{' && !isSpecial) {
                isContent = true;
                if (!hadComplete) temp += "[" + parentId + "]";
            } else if (style[i] == '}' && !isSpecial) {
                isContent = false;
                hadComplete = false;
            } else if (style[i] == '/' && style[i + 1] == '*') {
                isSpecial = true;
            } else if (style[i] == '*' && style[i + 1] == '/') {
                isSpecial = false;
            } else if (style[i] == ',' && !isSpecial && !isContent) {
                if (!hadComplete) temp += "[" + parentId + "]";
                hadComplete = false;
            }

            temp += style[i];

        }

        style = temp;

    }

    styleElement.innerHTML = style;
    styleElement.setAttribute('type', 'text/css');
    head.appendChild(styleElement);

};
