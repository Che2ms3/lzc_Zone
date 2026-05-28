function union(arr) {
    //参数校验 不是数组就返回空数组
    if (!Array.isArray(arr)) {
        console.log('type error')
        return [];
    }
    let obj = {};
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = true;
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(union([1,2,3,2,5]));