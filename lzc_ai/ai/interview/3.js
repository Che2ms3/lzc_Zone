function union(arr) {
    //参数校验 不是数组就返回空数组
    if (!Array.isArray(arr)) {
        console.log('type error')
        return [];
    }

    // filter + indexOf：当前元素在原数组中的第一个位置等于当前下标，说明是第一次出现
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(union([1,2,3,2,5]));
