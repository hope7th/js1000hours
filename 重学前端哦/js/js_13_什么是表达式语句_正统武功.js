// 表达式语句实际上就是一个表达式，它是由运算符连接变量或者直接量构成的
// 要么是函数调用，要么是赋值，要么是自增、自减

console.log("PrimaryExpression 主要表达式 ")
/*
 表达式的最小单位，它所涉及的语法结构也是优先级最高的。
 "直接量"就是直接用某种语法写出来的具有特定类型的值。
*/
"abc"
123
null
true
false
// 针对函数、类、数组、正则表达式等特殊对象类型
({});
(function(){});
(class{});
[];
/abc/g
// 任何表达式加上圆括号，都被认为是 Primary Expression
(a+b)
console.log("MemberExpression 成员表达式-----------")
// Member Expression 通常是用于访问对象成员的
a.b;
a["b"];
new.target;
super.b

f`a${b}c`
// 带函数的模板，这个带函数名的模板表示把模板的各个部分算好后传递给一个函数。

new Cls();
// 另一个是带参数列表的 new 运算，注意，不带参数列表的 new 运算优先级更低

console.log("NewExpression NEW 表达式------------")
// Member Expression 加上 new 就是 New Expression
// new new cls(1)  等价于 new (new Cls(1));

class Cls{
    constructor(n){
        console.log("cls",n);
        // cls 1
        return class {
            constructor(n){
                console.log("returned", n)
                // returned undefined
            }
        }
    }
}

new (new Cls(1));
// 1 被当做调用 Cls 时的参数传入了。却没有被当作第二个参数

console.log("CallExpression 函数调用表达式-----------");
// Member Expression 后加一个括号里的参数列表
a.b(c);
// super 关键字代替 Member Expression。
super();


a.b(c)(d)(e);
a.b(c)[3];
a.b(c).d;
a.b(c)`xyz`;
// Member Expression 中的某一子结构具有函数调用，
// 那么整个表达式就成为了一个 Call Expression。
console.log("LeftHandSideExpression 左值表达式------------")
/*
 New Expression 和 Call Expression 统称 LeftHandSideExpression，左值表达式。
左值表达式就是可以放到等号左边的表达式
*/
a()=b;
// 这样的用法其实是符合语法的，只是，原生的 JavaScript 函数，返回的值都不能被赋值。
// JavaScript 运行时的设计，不排除某些宿主会提供返回引用类型的函数，这时候，赋值就是有效的了。
console.log("AssignmentExpression 赋值表达式------------")
a = b
a=b=c=d
// 这样的连续赋值，是右结合的，它等价于下面这种：
a = (b=(c=d))
a+=b 
// 相等于
a = a + b;
// *=、/=、%=、+=、-=、<<=、>>=、>>>=、&=、^=、|=、**=
console.log("Expression 表达式-------------")
a = b,b=1,null;
// “整个表达式的结果”就是“最后一个逗号后的表达式结果”


/**
 * 想象力匮乏，不知道用什么语言来描述今天所学，退步巨大。
 * 表达式就像招数，内力，剑法，掌法，轻功，就是原子项
 * 
 * 
 * 函数，一招
 * 类，一门武功
 * 数组，一套剑法
 * 正则表达式，一类型武功
 * 所谓PrimaryExpression就是返回一个直接量，可以很简单也可以很复杂
 * 
 * 出招，成员表达式
 * 一招亢龙有悔，就是降龙十八掌里的一招
 * 
 * 发明新的武功，new表达式
 * 
 * 借用兵器，call表达式
 * 
 * 左值表达式，返回一个对象的表达式
 * 
 * 赋值表达式，传授功力招数
 * 
 * 多个表达式逗号分开，返回最后一门功夫
 */