/**
 * 在 JavaScript 中，将状态和行为统一抽象为“属性”，
 * 考虑到 JavaScript 中将函数设计成一种特殊对象（关于这点，我会在后面的文章中详细讲解，此处先不用细究），
 * 所以 JavaScript 中的行为和状态都能用属性来抽象。
 */


/**
 * JavaScript 中对象独有的特色是：对象具有高度的动态性
 * ，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力。
 */

var o = {
    a: 1
};
o.b = 2;
console.log(Object.getOwnPropertyDescriptor(o, "a"));
console.log(Object.getOwnPropertyDescriptor(o, "b"));


var o1 = {
    a: 1
};
Object.defineProperty(o1, "b", {
    value: 2,
    writable: false,
    enumerable: false,
    configurable: true
});
//a和b都是数据属性，但特征值变化了
console.log(Object.getOwnPropertyDescriptor(o1, "a")); // {value: 1, writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(o1, "b")); // {value: 2, writable: false, enumerable: false, configurable: true}
o1.b = 3; //赋值失败哦。
console.log(o1.b); // 2
console.log("------数据属性end--------");
var o2  = { b:"ss",a:"sss",get a(){return 1},}
console.log(o2.a); 
console.log(Object.getOwnPropertyDescriptor(o2, "a"));
/**
 * { get: [Function: get a],
  set: undefined,
  enumerable: true,
  configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(o2, "b"));
console.log("------访问器属性end--------");
/**
 * 与老师出生那天，跑去办身份证，这孩子生辰八字定了，不能改了。这是数据属性。
 * 叫啥名啊：于谦，难听死了，叫驴鞭吧。访问器属性，名字改了。
 */


