// 1:简单数据类型比较
let num = 5;
let str = "5";
console.log(num==str);
console.log(num===str);
console.log(''==false);
console.log(''===false);
console.log(null==undefined);
console.log(null===undefined);
// 但在数据类型不一致的情况下，==会做一些隐性的类型转换。
console.log("-----------------------------")
//2：引用类型的比较,
let a = {x:1};
let b = a;
console.log(a===b)
let c = {y:1};
let d = {y:1};
console.log(c===d);

console.log("-----------------------------")
//3:Object.is是ES6中新增的方法，与===非常类似，同样用作比较两个值是否相等。Object.is(1,1)
console.log(Object.is(1,1));
console.log(Object.is('str','str'));
console.log(Object.is({},{}));
console.log(+0===-0)
console.log(NaN===NaN)
console.log(Object.is(+0,-0))
console.log(Object.is(NaN,NaN))