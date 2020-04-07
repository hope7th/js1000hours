function foo () {
  "use strict"
  // a=1;//a is not defined,严格模式不允许省略 var 的隐式自动全局变量声明
  //遵循严格模式也更容易让 引擎优化你的代码
}
foo()


//作为值得函数
function foo2 () {
  
}

var foo2 = function () {//函数表达式被称为是匿名的

}

var x = function bar() { //函数表达式是已命名的

};

//立即调用函数表达式
(function IIFE(){
  console.log("hello world!")
})()

var x = (function iife() {
  return 42
})()
console.log(x)

//闭包
function makeAdder (x) {
  function add (y) {
    return y+x;
  }
  return add
}

console.log(makeAdder(1)(2))

function User () {
  var username,password;
  function doLogin (user,pw) {
    username = user;
    password = pw;
  }
  var publicAPI = {
    login:doLogin
  };
  return publicAPI;
}
var fred = User();
fred.login("fred","12Battery34!");
console.info(fred)
var fred1 = new User();
fred1.login("fred1","1234567")
console.info(fred1)
//new运算符是用来实例化一个类，从而在内存中分配一个实例对象。
console.log("this------------")
//this运算符 指的是一个对象，而不是函数
var bar = "global";
function foo4 () {
  console.log(this)
  console.log(this.bar)
}
var obj1 = {
  bar:"obj1",
  foo4:foo4
}
var obj2 = {
  bar:"obj2"
}

foo4();
obj1.foo4();
foo.call(obj2);
var obj3 = new foo4()//和obj3 = {}结果一样
console.log(JSON.stringify(obj3))
console.log(typeof obj3)

//原型委托
var foo5 = {
  a:42
}
var bar = Object.create(foo5)
bar.b = "hello world";
console.log(bar.b);
console.log(bar.a);


if (!Number.isNaN){
  Number.isNaN = function (x) {
    return x !==x;
    //即 NaN 是整个语言中唯一和
    // 自身不相等的值。因此，NaN是使得x != x为真的唯一值。
    
  }
}

function foo6(a=2){
  console.log(a)
}
foo6()
foo6(88)
//此函数等价于
function foo7 () {
  var a = arguments[0]!==(void 0)?arguments[0]:2;
  console.log(a)
}
foo7()
foo7(99)

console.info(void 0)
console.log(void "ss")


//为什么undefined无法作为默认参数传入
//单看这段 ES6 版本的代码，你可能不会意识到 undefined 是唯一一个无法作为默认值参数 显式传入的值。而编译转换后的代码就更清楚地展示了这一点。

//alert(..) 是由浏览器提供给 JavaScript 程序的,所以nodejs 无用

//document 上的方法 getElementById(..) 看起来像是一个正常的 JavaScript 函数， 但它其实是浏览器的 DOM 提供的指向内置方法的一个很薄的暴露接口