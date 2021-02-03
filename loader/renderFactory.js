module.exports = function (templateObj, id) {

    if (templateObj == null) return 'createElement("div",{style:"color:red"},["Invalid Template"])';

    let xhtmlJson = templateObj.xhtmlJson;

    return `function(createElement){

        return ${(function doit(pnode) {

            // 如果是文本
            if (pnode.type == 'text') {

                return JSON.stringify(pnode.content.trim()

                    // 由于回车的问题，非`的字符串不支持，我们需要使用转义替换
                    .replace(/\n/g, '↵').replace(/\r/g, '')

                    // 特殊转义字符进行校对
                    .replace(/\&lt;/g, '<')
                    .replace(/\&gt;/g, '>')
                    .replace(/\&amp;/g, '&')

                );

            }

            // 不然就是结点
            else {

                let childrenRender = "[", cNodes = pnode.childNodes;
                for (let i = 0; i < cNodes.length; i++) {
                    childrenRender += doit(xhtmlJson[cNodes[i]]) + ",";
                }
                childrenRender = childrenRender.replace(/,$/, '') + "]";

                pnode.attrs['data-quickpaper-' + id] = "";

                return `createElement('${pnode.name}',${JSON.stringify(pnode.attrs)},${childrenRender})`;

            }


        }(templateObj.pnode))}

    }`;

};
