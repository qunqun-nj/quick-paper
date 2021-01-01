// quickpaper-style-loader

const loaderApi = () => { };

/**
 *
 * loader:[loader3,loader2,loader1]
 *
 * 执行顺序：
 *
 * picth3 -> pitch2 -> pitch1
 *
 * -> loader1 -> loader2 -> loader3
 *
 * 特别注意：如果pitch有return，会提前返回执行
 *
 */

loaderApi.pitch = function (remainingRequest) {

    return "";

};

module.exports = loaderApi;
