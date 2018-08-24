alert(a);
//1
function a() {
    alert(2);
}
alert(a);
//2
var a = 1;
alert(a);
//3
var a = 3;
alert(a);
//4
function a() {
    alert(4)
}
alert(a);

//!!!a(); a is not a function,因为4被提升到最顶层，此时的a=3，所以 a is not a function
/*
// 第1行，没有关键字 ， 不解析
// 第2行，遇到 function 关键字，解析到全局的头部
a = function a(){ alter(2); }
// 第3行，没有关键字 ， 不解析
// 第4行，遇到关键字 var ， 解析到全局的头部
a = undefined
// 第5行，没有关键字 ， 不解析
// 第6行，遇到关键字 var ， 解析到全局的头部
a = undefined
// 第8行，遇到 function 关键字，解析到全局的头部
a = function a(){ alter(4); }
// 第9行，没有关键字 ， 不解析
*/
/*
此时这里有4个同名变量 a ，依循规则是：function 优先与 var, 同名的后面覆盖前面的
因此，a = function a(){ alter(2); } 替换掉下面的2个 a = undefined ，a = function a(){ alter(4); } 又替换掉 a = function a(){ alter(2); } ,最终只剩下 a = function a(){ alter(4); }
*/

var a = 5;
var b;
function xxx() {
    //用申明的方式创建函数
}

var fun = function () {

}
c = 5;
//首先js会创建一个词法环境对象LexicalEnviroment,全局下等同于我们的window；
/*
LexicalEnviroment{
  a: undefined
  b: undefined
  xxx: 该函数的引用
  fun: undefined
}
*/
f();
//!!!g();
// 因为词法环境中f存在引用，g确实是undefined，因此当在为g赋值之前调用g会报错。刚


function f() {
    alert("ff")
}

var g = function () {
    alert("gg")
  //
};
g();

//实例2

console.log(a1);//undefined 先赋值给undefined
// console.log(b1); b1 is not defined
var a1 = 1;
b1 = 4;
console.log(a1);
console.log(b1);




