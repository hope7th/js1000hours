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