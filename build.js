const fs = require('fs');
const rollup = require('rollup');
const Terser = require('terser');
const babel = require('@babel/core');
const rollupPluginNodeResolve = require('rollup-plugin-node-resolve');
const rollupPluginCommonjs = require('rollup-plugin-commonjs');

let packageJSON = JSON.parse(fs.readFileSync('./package.json'));

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

console.log(
  "\x1B[30m" +
  "📚 Quick Paper" +
  "\n------------------------------------------------------------" +
  "\n用于快速构建文档的前端框架。" +
  "\x1B[39m\n"
);

let banner = `/*!
* quick-paper v`+ packageJSON.version + `
* (c) 2019-`+ new Date().getFullYear() + ` ` + packageJSON.author + ` ` + packageJSON.repository.url + `
* License: `+ packageJSON.license + `
*/\n`;

async function build(inputOptions, outputOptions) {

  console.log("\x1B[30m rollup模块整合：src/**/*.js → dist/quick-paper.rollup.js \x1B[39m\n");

  // 模块打包
  const bundle = await rollup.rollup(inputOptions);
  await bundle.write(outputOptions);

  console.log("\x1B[33m>> rollup模块整合完毕！ \n\x1B[39m");

  console.log("\x1B[30m babel转义：dist/quick-paper.rollup.js → dist/quick-paper.babel.js \x1B[39m\n");
  // babel转义
  babel.transformFile("./dist/quick-paper.rollup.js", {}, function (err, result) {
    if (result) {
      fs.writeFileSync("./dist/quick-paper.babel.js", result.code);

      console.log("\x1B[33m>> babel转义成功！ \n\x1B[39m");

      console.log("\x1B[30m 压缩混淆：dist/quick-paper.babel.js → dist/quick-paper.min.js \x1B[39m\n");
      // 压缩混淆
      let data = Terser.minify(result.code);
      if (!result.error) {
        fs.writeFileSync("./dist/quick-paper.min.js", data.code);

        console.log("\x1B[33m>> Terser压缩混淆成功！ \n\x1B[39m");
      } else {
        console.log("\x1B[35m>> Terser压缩混淆失败！\n\x1B[39m" + data.error);
      }

    } else {
      console.log("\x1B[35m>> babel转义失败！\n\x1B[39m" + result.error);
    }
  });

}

build({
  "input": "./src/index.js",
  "plugins": [

    // 帮助 Rollup 查找外部模块，然后安装
    rollupPluginNodeResolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),

    // 将CommonJS模块转换为 ES2015 供 Rollup 处理
    rollupPluginCommonjs({
      include: "node_modules/**",
      exclude: []
    })

  ]
}, {
    "file": "./dist/quick-paper.rollup.js",
    "format": "iife",
    "name": "quick-paper.rollup",
    banner
  }, "iife");
