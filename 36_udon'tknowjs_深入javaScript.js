var a;
console.log(typeof a);
a = 'hellow word'
console.log(typeof a);
a = 42;
console.log(typeof a);
a = true;
console.log(typeof a);
a = null;//bug 永久
console.log(typeof a);
a = undefined;
console.log(typeof a);
a = {b:'c'}
console.log(typeof a);

a = Symbol("hello word")//符号起初被设计用于创建对象私有成员
console.log(typeof a);

var obj = {
    a:'hello word!',
    'hello word!':'a'
}
//如果属性名中有特殊字符的话，那么中括号表示法就会很有用，
console.log(obj.a)
console.log(obj["hello word!"])


//javascript的"封箱"
var a= 'hello word!'
var b = 3.1415926
console.log(a.length);
console.log(a.toUpperCase())
console.log(b.toFixed(2))
//为什么字符串有方法，存在一个 String(S 大写)对象封装形式，通常称为“原生的”，与基本类型相对应
//



