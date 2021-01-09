
// quickpaper-loader

const path = require('path');
const qs = require('querystring');
const hash = require('hash-sum');

module.exports = function loader(source) {

    const loaderContext = this;

    const {
        rootContext,
        resourcePath,
        resourceQuery
    } = loaderContext;

    const filename = path.basename(resourcePath);
    const rawQuery = resourceQuery.slice(1);
    const incomingQuery = qs.parse(rawQuery);
    const context = rootContext || process.cwd();

    const rawShortFilePath = path
        .relative(context, resourcePath)
        .replace(/^(\.\.[\/\\])+/, '');

    const id = hash(rawShortFilePath);

    if (incomingQuery.type) {

        let code = require('./render-html.js')(source, incomingQuery.type);

        if (incomingQuery.type == 'style') {
            if (code != null) {
                code = `export default \`${code}\``;
            } else if (/^export default/.test(source)) {
                code = source.replace(/^export default `/, '').replace(/`$/, '');
            } else {
                code = "";
            }
        } else if (incomingQuery.type == 'script') {
            if (code == null) {
                if (/\/\*quickpaper-loader-es\*\/$/.test(source)) {
                    code = source;
                } else {
                    code = 'export default {};';
                }
            } else {
                code += "\n/*quickpaper-loader-es*/";
            }
        }

        loaderContext.callback(null, code);

        return;

    } else {

        let templateObj = require('./render-html.js')(source, 'template');
        let code = require('./renderFactory')(templateObj, id);

        let exportCode = `

            // 导入js
            import script from './${filename}?QuickPaper&type=script&lang=js&hash=${id}&';

            // 导入css
            import './${filename}?QuickPaper&type=style&lang=css&hash=${id}&';

            script.render=${code};

            export default script;
        `;

        return exportCode;
    }

};
