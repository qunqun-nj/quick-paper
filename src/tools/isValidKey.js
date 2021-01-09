
// 判断是否是合法的方法或数据key

export default function (key) {
    // 判断是不是_或者$开头的
    // 这两个内部预留了
    if (/^[_$]/.test(key)) {
        console.error('The beginning of _ or $ is not allowed：' + key);
    }
};
