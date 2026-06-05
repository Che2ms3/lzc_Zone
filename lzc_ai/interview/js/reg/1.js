 let str = '13888888888';
// 描述一个匹配的规则
// 一个字符一个字符的匹配
// 
 let reg = /1[3-9]/;
 console.log(reg.test(str)); // true