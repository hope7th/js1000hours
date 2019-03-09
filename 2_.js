//变量没有类型，只有值才有
console.log(typeof(undefined))
console.log(typeof(true))
console.log(typeof(42))
console.log(typeof("42"))

//普通的对象类型
console.log(typeof {life:42})
console.log(typeof Symbol())
console.log(typeof null)

//null类型
typeof null === "object" //这个bug由来已久，暂时无法修复，

//函数类型
console.log(typeof function a(){})
//function 函数也是javascript的一个内置对象，是object的一个子对象，可调用的对象，call属性可调用
function a(b,c){}
console.log(a.length)//length属性为声明的参数得个数

//数组类型
console.log(typeof [1,2,3]==="object")
//数组类型也是object的一个子类型，

var c
console.log(typeof c) //undefined
console.log(typeof e) //referenceError b:is not defined

//使用typeof 建立防范机制避免报错