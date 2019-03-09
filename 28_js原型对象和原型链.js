//function --> prototype 函数才有的属性
// object --> __proto__  每个对象都有的属性  构造器的原型，__proto__===constructor.prototype

var a = {};
console.log(a.prototype); //undefined
console.log(a.__proto__);//{}
var b = function () {};
console.log(b.prototype);//b {}
console.log(b.__proto__)//[Function] 函数也是对象


// 三种对象创建方式

//__proto__的指向取决于对象的创建方式
// 字面量方式创建对象
var a  = {};
console.log('原型链指向');
console.log(a.__proto__);//{}
console.log(a.__proto__===a.constructor.prototype)//true
console.log(a.__proto__===Object.prototype)//
// 构造器方式创建对象
console.log('原型链指向2');
var A = function () {}
var a = new A();
console.log(a.__proto__);//A {}
console.log(a.__proto__ === a.constructor.prototype); //true
console.log(a.__proto__==A.prototype);//A {}
console.log(a.constructor.prototype==A.prototype);

var a2 = new Object();
console.log(a2.__proto__);//{}
console.log(a2.__proto__ === a2.constructor.prototype); //true

//Object

var a1 = {a:1};
var a2 = Object.create(a1);
console.log(a2.__proto__);//{ a: 1 }
console.log(a2.__proto__ === a2.constructor.prototype); //false

//原型链,js万物皆是对象，__proto__连起来的链条就是原型链条,最终之为null

var A = function () {};

var a = new A();
A.prototype.name = 'hh';
Object.prototype.age = '17';
console.log(a.name);
console.log(a.age);

console.log(a.__proto__);//A { name: 'hh' }
console.log(a.__proto__.__proto__);//{ age: '17' }
console.log(a.__proto__.__proto__.__proto__); //null
console.log(A.prototype.__proto__===Object.prototype);//true

console.log(a.prototype);
console.log(a.constructor.prototype);
console.log(A.prototype);

var a3 = {}//其实就是调用了Object的构造函数，
console.log(a3.constructor.prototype);
console.log(Object.prototype);
console.log(A.prototype.__proto__);
console.log(A.prototype);//他的原型构造器打印不出来

//特殊情况讨论，打破原型链的规则
var a5 = {name:'hha5'};
var a6 = Object.create(a5);
console.log(a5.__proto__);//{ age: '17' }
console.log(a6.__proto__);//{ name: 'hha5' }
console.log(a6.__proto__==a5);//true。！！！这个地方非常诡异
console.log(a6.constructor.prototype);//！！！{ age: '17' }
console.log(a6.__proto__.__proto__);//！！！{ age: '17' }
// a6的构造器的原型指向的是Object,a6的__proto__属性则指向的是a5.

//总结，a.__proto__ == 它的构造器的.prototype ,但是Object.create(a5);指向它的a5。
//原型链继承只是粗略了解，具体情况还需深入理解



