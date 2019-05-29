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