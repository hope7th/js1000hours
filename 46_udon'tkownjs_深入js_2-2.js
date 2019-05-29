
//let 声明
var a = 2;
{
  let a = 3;
  console.info(a)
}
console.log(a)

//块作用域(block scoping)。这意味着我们只需要一对 { .. } 就可以创建一个作用域。不像使用 var 那样声 明的变量总是归属于包含函数(即全局，如果在最顶层的话)作用域，
//let 块 为标准化
// let (a=2,b,c){
//
// }

{
  console.log(c);
  //console.log(b)//ReferenceError: b is not defined
  //过早访问 let 声明的引用导致的这个 ReferenceError 严格说叫作临时死亡 区(Temporal Dead Zone，TDZ)错误——你在访问一个已经声明但没有 初始化的变量。
  var c;//变量提升，var 都是归属于包含它的整个函数作用域。
  let b;
  console.log(b);

  //对于 TDZ 值和未声明值(以及声明过的!)，typeof 结果是不同的。

  if (typeof d==='undefined'){//未声明
    console.log('cool')
  }

  // if (typeof e==='undefined'){//声明了，但是放在:临时死亡区
  //    console.log("sss")
  // }
  // let e
}

var funcs0 = [];
for (var i=0;i<5;i++){
  funcs0.push(function () {
    console.log(i)
  })
}

var funcs = [];
  for (let j=0;j<5;j++){
    funcs.push(function () {
      console.log(j)
    })
  }

funcs[3]();
funcs[4]();
funcs0[4]();

//const 只读常量
{
  const f = 2;//const 声明必须要有显式的初始化
  console.log(f);
  // f = 3;//Assignment to constant variable.

  const arr = [1,2,3];
  arr.push(4);
  console.log(arr) //如果这个值是复杂值，比如对象或 者数组，其内容仍然是可以修改的。
}
// spread

console.log('-----------------')

function foo (x,y,z) {
  console.log(x,y,z)
}
foo(...[1,2,3])

foo.apply(null,[1,2,3])  //调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。
var a  = [2,3,4];
var b = [1,...a,5]
console.log(b);
function foo(x,y,...z) {
  console.log(x,y,z)
}
foo(1,2,3,4,5)

function foo3 (...args) {
  args.shift();
  console.log(...args)
}

function bar () {
  console.log("arguments")
  console.log(arguments)
  //把arguments转换为一个真正的数组
  var args = Array.prototype.slice.call(arguments)
  //
  args.push(4,5);
  args = args.filter(function (v) {
    return v%2 == 0;
  });

  foo3.apply(null,args)
}

bar(0,1,2,8)

function foo4 (x,y) {
  x = x||11;
  y = y||31;
  console.log(x+y);
}
foo4();
foo4(0,89);//但同时又有点危险，比如，如果 对于一个参数你需要能够传入被认为是 falsy(假)的值。
foo4(5);
foo4(null,6)
console.log('foo5----------------------')
function foo5 (x,y) {
  console.log(arguments)
  x = (0 in arguments)?x:11;
  console.log("x"+x)
  y = (1 in arguments)?y:31
  console.log(x+y)
}
foo5(5);
foo5(undefined,8)
console.log("默认表达式")
//可以看到，默认值表达式是惰性求值的，这意味着它们只在需要的时候运行——也就是 说，是在参数的值省略或者为 undefined 的时候。
function bar1 (val) {
  console.log("val="+val)
  return y + val;
}
function foo6 (x=y+3,z=bar1(x)) {
  console.log(x,z)
}
var y = 5;
foo6(10)
y = 6
foo6(undefined,10)


var w = 1,z = 2;

function foo7 (x=w+1,y=x+1,z=z+1) {//z + 1 中的 z 发现 z 是一个此刻还没初始化的参数变量，所以它永远不会试图从外 层作用域寻找 z。
    console.log(x,y,z)
}
try {
  foo7()
}catch (e) {
  console.log(e)
}
//这个奇怪的代码
function foo8 (x = (function (v) {
  return v+11
})(31)) {
  console.log(x)
}
foo8()
foo8(1000)


function foo9 (x = (function (v) {
  return x+11
})(22)) {
  console.log(x)
}

try {
  foo9()
}catch (e) {
  console.log(e)
}
console.log("解构")
function foo10 () {
  return [1,2,3]
}

function bar10 () {
  return {
    x:4,
    y:5,
    z:6
  }
}
//于数组解构和对象解构。
var [aj,bj,cj] = foo10();
var {x:xj,y:yj,y:zj} = bar10();
console.log(aj,bj,cj)
console.log(xj,yj,zj)

