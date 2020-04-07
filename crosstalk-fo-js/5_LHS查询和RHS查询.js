//LHS查询，找到变量所在的容器
//RHS查询，得到某某的值
'use strice';
function foo(a) {
    console.log(a)
}

foo(2)
//3个RHS引用，对foo和和对console和对a
//1个LHS查询，a=2隐藏的赋值操作

function foo1(a) {
    var b = a;
    return a + b;
}

var c = foo1(2);
//console.log(c)
//3处LHS查询，a,b,c
//4处RHS查询，return,foo1,a,b



function  foo2(e) {
    console.log(e+f)
    //f = e
}
//ReferenceError 作用域判别失败
//TypeError 操作非法或者不合理，比如非函数类型的值进行函数调用

foo2(10);