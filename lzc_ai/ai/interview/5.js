function union(arr) {
    //参数校验 不是数组就返回空数组
    if (!Array.isArray(arr)) {
        console.log('type error')
        return [];
    }
    let res = [],
    obj = new Map();
        len = arr.length;
    for (let i = 0; i < len; i++) {
        if (!obj.has(arr[i])) {
            obj.set(arr[i], true);
        }
    }
    return [...obj.keys()];
}

console.log(union([1,2,3,2,5]));