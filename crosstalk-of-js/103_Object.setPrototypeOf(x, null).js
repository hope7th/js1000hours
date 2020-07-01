// 正如 Undefined 是一个类型，而undefined是它唯一的值一样，Null 也是一个类型，且null是它唯一的值。

console.log(typeof(null))

MyClass = class extends null{}
console.log(MyClass)

x = Object.create(null);
console.log(x)

/**
 * null值，是一个连属性表没有的对象，它是“元类型”系统的第一个实例，你可以称之为一个原子。
 */

console.log(Object.getPrototypeOf(Object.prototype))

console.log(Object.setPrototypeOf(new Object, null))

/**
 * 因为它就是“对象”最真实的、最原始的、最基础抽象的那个数据结构：关联数组。所谓属性表，就是关联数组。
 * 一个空索引数组与空的关联数组在 JavaScript 中是类似的（都是对象）：
 */


 //空索引数组
 a = Object.setPrototypeOf(new Array, null)
 console.log("a------------")
 console.log(a)

 //空关联数组
 x = Object.setPrototypeOf(new Object,null)
 console.log("x------------")
 console.log(x)

 console.log(a.length)
 console.log(Object.getOwnPropertyDescriptor(a))