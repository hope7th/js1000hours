//let const 都处于块级作用域。不存在变量提升，不允许重复声明

//const 只读的常量，所指的内存地址保持不变
/*简单常量*/
const a = 4; //必须立即初始化，改变常量和只声明不赋值都会报错
// a = 4;
// console.log(a)  //Missing initializer in const declaration

/*复合型常量*/
// 对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），不能保证指向的数据结构不可变。
const arr = []
arr.push(1);//可以改变数据结构
// arr = [1,2,3,4] 不能改变内存地址，
console.info(a)

//冻结对象
 const object1 = {
     property1:42
 };

const object2 = Object.freeze(object1);

// "use strict"
// object2.property1 = '33'
console.log(object2.property1);

var obj = {
    prop:function () {},
    foo:'bar'
}
obj.foo = 'baz'
obj.lumpy = "woof";
delete obj.prop
console.info(obj);
var o =  Object.freeze(obj)

console.log(o===obj)
console.log(Object.isFrozen(obj));
// obj.foo = "quux";
// obj.quaxxor = "duck";
//
// function fail() {
//     'use strict'
//     obj.foo = 'sparky'; // throws a TypeError
//     delete obj.quaxxor; // 返回true，因为quaxxor属性从来未被添加
//     obj.sparky = 'arf'; // throws a TypeError
// }
// fail()
// Object.defineProperty(obj, 'ohai', { value: 17 });
// Object.defineProperty(obj, 'foo', { value: 'eit' });
//
// // 也不能更改原型
// // 下面两个语句都会抛出 TypeError.
// Object.setPrototypeOf(obj, { x: 20 })
// obj.__proto__ = { x: 20 }

let b = [0];
Object.freeze(b);
b[0]=1;
console.log(typeof b)
b.push(2)





