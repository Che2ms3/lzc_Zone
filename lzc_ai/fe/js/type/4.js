// symbol 唯一的标识符，用函数创建的，简单数据类型
// 轻松表达独一无二的值，常用于对象属性的唯一标识符
console.log(Symbol('foo') === Symbol('foo')); // false
console.log(typeof Symbol('foo'));
console.log(Symbol());//绝对唯一，可以传一个标签label
let obj = {
    [Symbol()]:'value',
    prop:"2"
}