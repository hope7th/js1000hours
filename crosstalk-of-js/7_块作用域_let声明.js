// 立即被调用函数表达式 IIFE

//变量作用域基本单位总是function
var a = 2;
(function IIFE() {
    var a = 3;
    console.log(a);
})()
console.log(a);

//let 声明
//{ .. }就是我们用来创建一个作用域所需要的全部
var a = 2

{
    let a = 3
    console.log(a);
}

console.log(a)

//传统的被var声明的变量，无论它们出现在何处，都会被附着在整个外围的函数作用域中；与此不同的是，let声明附着在块儿作用域，而且在它们出现在块儿中之前是不会被初始化的

{
    console.log(a1);//undefined
    //console.log(b1)//ReferenceError
    var a1 = 1
    let b1 = 2
}