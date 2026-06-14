var height = 200;
// 局部作用域 global scope 
function setWidth(){
    // 局部作用域变量 
    var width = 100;
    console.log(width,height); 

}
setWidth();
// console.log(width); // ReferenceError: width is not defined
var age = 100;
if(age > 12){
    // 块级作用域
    // es6 常量 不可以改变的 
    let dog = age *7;
    console.log(dog);
    dog++;
}
console.log(dog);

