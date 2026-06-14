// 常量一开始就要赋值
const item = 1;
let a;//undefined;
// 简单数据类型的时候，const 代表的值不能改变
const key = 'abc123';
key='ABC123';// TypeError: Assignment to constant variable.
let points = 50;
points = 51;
// let 不只是值可以改变，类型也可以改变
// 不要这么干
points = "52";// 不好的
let winner = false;
winner = '戴';
//复杂数据类型 对象 
//值可以改变，但是类型不能改变
const person = {
    name: 'liyugang',
    age: 18
}
person.age++
console.log(person);
person = '111'; 