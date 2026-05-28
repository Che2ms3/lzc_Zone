function union(arr) {
    //参数校验 不是数组就返回空数组
    if (!Array.isArray(arr)) {
        console.log('type error')
        return [];
    }
    arr=arr.sort();//on log(nlogn)
    let res = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== res[res.length - 1]) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(union([1,2,3,2,5]));