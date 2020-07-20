// https://time.geekbang.org/column/article/164312

// 1:它宣称自己同时支持值类型和引用类型的数据，并且，所谓值类型中的字符串是按照引用来赋值和传递引用（而不是传递值）的。

var x = 1;
var y = x;

var x1 = "12312312";
var y1 = x1;
var Obj = {
    x:"ss"
}

/*那么值“该怎么赋值和传递”呢？如果x的值是1，那么y = x的话，就是把1这个值“抄写”到y里面去。
这是“正常的值”的处理方法，但是如果“字符串值”也这么处理，就完蛋了，
因为字符串可能无数多个字符，那么当`y = x`按照“正常的值处理方法”来实现的话，
这个“值的复制”的开销就受不了。*/

// 郭德纲买了个袜子，于谦觉得好，就问：你的内裤那儿买的，我也买一条：值抄写。
// 郭德纲和于谦买不起房子，共租一所房子，后来说相声挣钱了，郭德纲说，我要自己买房子，不偷看你老婆洗澡了。：传递引用。






// 所有删除值的 delete 就直接返回 true”，表明该行为过程中没有异常。

delete x

// 因为这个语法实际起作用的是一个对象的属性，也就是“删除对象的成员”。那么它真正需要的语法其实是：

delete Obj.x

// 只不过因为全局对象的成员可以用全局变量的形式来存取，所以它才有了

delete x


// 只不过因为全局对象的成员可以用全局变量的形式来存取，所以它才有了
delete x

// delete 这个操作的正式语法设计并不是“删除某个东西”，而是“删除一个表达式的结果”：

delete 0

// 事实上是在说：JavaScript 将 0 视为一个表达式，并尝试删除它的求值结果。

// delete运算发现它的操作数是“值 / 非引用类型”，就直接返回了 true。

x = x
// 所有赋值操作的含义，是将右边的“值”，赋给左边用于包含该值的“引用”。

// 所以，“delete x”归根到底，是在删除一个表达式的、引用类型的结果（Result），而不是在删除 x 表达式，或者这个删除表达式的值（Value）。

//课后练习题
const homeworkY = {
    x:"1"
}
console.log(delete homeworkX) //true
console.log(delete 0) //true
console.log(delete homeworkY) //false
"use strict";
console.log(delete homeworkX1) //true

/**
 * 阿里巴巴要删除合伙人，马云和蔡崇信是永久合伙人，只读，一删除就报错，
 * 删除一个不存在的合伙人，直接返回正确删除。
 * 如果删除的不是一个人对象，而是人的弱点（值），直接返回true。无法正确删除。
 */

 console.log("=========")
 var homeworkX2 = "123"
 console.log(delete homeworkX2)
 console.log(homeworkX2)

var obj = {
    a:"123",
    b:{
        name:"123"
    }
}

console.log(delete obj.a)
console.log(obj)

homeworkX3 = "1234"
console.log(homeworkX3)
console.log(delete homeworkX3)


