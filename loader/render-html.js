module.exports = function (template, tagName) {

    let xhtmlJson = require('@hai2007/algorithm').xhtmlToJson("<quick-paper>" + template + "</quick-paper>");

    for (let i = 0; i < xhtmlJson[0].childNodes.length; i++) {

        let child = xhtmlJson[xhtmlJson[0].childNodes[i]];

        // 寻找第一个合适的
        if (child.name == tagName) {

            // javascript
            if (tagName == 'script' || tagName == 'style') {
                try {
                    return xhtmlJson[child.childNodes[0]].content;
                } catch (e) {
                    return "";
                }
            }

            // html
            if (tagName == 'template') {
                child.name = "div";
                child.attrs['quickpaper'] = "";
                return {
                    xhtmlJson,
                    pnode: child
                };
            }

        }

    }

    // 否则没有找到
    return null;

};
