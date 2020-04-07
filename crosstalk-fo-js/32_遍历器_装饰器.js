console.log(Object.prototype[Symbol.iterator])
//undefined
console.log(Array.prototype[Symbol.iterator]);
//function values() { [native code] }
console.log(String.prototype[Symbol.iterator]);
//function [Symbol.iterator]() { [native code] }

let arr = [1,2,3];
for (let s of arr){
    console.log(s)
}


//修饰器 (decorator) 是 ES7 的特性，很遗憾它没能在 ES6 中实现。由于 ES7 还处于起草的阶段，
//许多面向对象的语言都有修饰器（Decorator）函数，用来修改类的行为。
// @testlog
// class MyClass {}
// function testlog(target){
//    /*     target.name = "装饰";*/
//         // target.prototype.logger = ()=>`${target.name} 被调用`
// }
// console.log(MyClass.testlog);


