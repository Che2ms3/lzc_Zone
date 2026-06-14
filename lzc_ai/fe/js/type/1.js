// 表示空，没有
// null
// primitive 原始 
// 拷贝式赋值
let a = null;
let b = a; // 拷贝，复印机
b = 2;
let obj1 = {name: 'lzc'}
let obj2 = obj1;// 引用式赋值
obj2.company = "快手"
console.log(obj1, obj2);
console.log(a, b);
console.log(a);
let obj = {
    name: 'lzc',
    address: null
}

console.log(obj.address);
console.log(obj.age); // undefined

let largeObject = {
    data: new Array(100000000).fill('lzc')
}
// 手动回收内存？
largeObject = null; // 解除引用，等待垃圾回收机制回收内存