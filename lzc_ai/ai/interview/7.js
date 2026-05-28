function union(arr) {
    //参数校验 不是数组就返回空数组
    if (!Array.isArray(arr)) {
        console.log('type error')
        return [];
    }

    return [...new Set(arr)];//展开运算符: ...
}

console.log(union([1,2,3,2,5]));