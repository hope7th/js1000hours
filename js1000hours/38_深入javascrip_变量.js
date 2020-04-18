//var 提升
var a = 2;
foo();
function foo () {
  console.log(a);
  a = 3;
  var a;//提升到块及作用域的最上面
}

console.log(a)

//先有鸡还是先有蛋
b = 2;
var b;
console.log(b);//2

console.log(c)//undefined
var c = 3;

//函数声明会被提升，但是函数表达式却不会被提升。
foo1()
function foo1() {
  console.log(a)//undefined
  var a = 2;
}

// foo3()//TypeError: foo3 is not a function,foo3() 由于对 undefined 值进行函数调用而导致非法操作， 因此抛出 TypeError 异常。
var foo3 = function () {
  console.log('foo3')
}

function foo4 () {
  var a1 = 4;
  function bar () {
    var b1 = 5;
    function baz () {
      var c1 = 6;
      console.log(a1,b1,c1)
    }
    baz();
    console.log(a1,b1)
  }
  bar();
  console.log(a1)
  // console.log(c1) //ReferenceError: c1 is not defined
}

foo4()


function foo5 () {
  a2 = 1;
}
foo5()
console.log(a2)

//let {} 块级作用域和函数作用域的重要区别
function foo6 () {
  var a4 = 1;
  if (a4>=1){
    let b4 = 2;
    while (b4<5){
      let c4=b4*2;
      b4++;
      console.log(a4+c4)
    }
  }
  // console.log("b3 "+b4,"c3 "+c4)
  //ReferenceError: b4 is not defined
}

foo6()

function foo7 () {
  var a3 = 1;
  if (a3>=1){
    var b3 = 2;
    while (b3<5){
      var c3=b3*2;
      b3++;
      console.log(a3+c3)
    }
  }

  console.log("b3 "+b3,"c3 "+c3)
}

foo7()

// console(b3) ReferenceError: b3 is not defined
//var 申明的变量只提升在函数作用域的最顶端或者全局作用域最顶端

//非严格模式下,自动升级为全局变量
function foo8 () {
  // "use strict"
  a4 = 4
}
foo8()
console.log(a4)

//函数作用域内声明的变量能不能提升成全局变量呢
function foo9(){
  console.log(a5)//undefined 能提升到函数的最顶端
  var a5 = 5
  // console.log(a6) //a6 is not defined

  {
    // console.log(a6)//let什么的变量，只属于块，切不能提升
    let a6 = 6

  }
}

foo9()
// console.log(a5) //a5 is not defined




