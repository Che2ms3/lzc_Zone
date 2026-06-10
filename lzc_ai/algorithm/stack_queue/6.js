let arr = [10, 2, 5];
// 一定要传函数， 不传函数默认按ASCII排序
arr.sort((a, b) => a - b);// 升序
console.log(arr);