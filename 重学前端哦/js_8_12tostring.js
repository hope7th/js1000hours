// 词法规定了语言的最小语义单元：token，可以翻译成“标记”或者“词”

// JavaScript 的词法
// WhiteSpace 空白字符
// LineTerminator 换行符
// Comment 注释
// Token 词
//     IdentifierName 标识符名称，典型案例是我们使用的变量名
//     Punctuator 符号，我们使用的运算符和大括号等符号。
//     NumericLiteral 数字直接量，就是我们写的数字。
//     StringLiteral 字符串直接量，就是我们用单引号或者双引号引起来的直接量。
//     Template 字符串模板，用反引号` 括起来的直接量。

// 模版字符串
let name = "world"
console.log(`hello,${name}`);
// 这时候12. 会被当作省略了小数点后面部分的数字，
// 而单独看成一个整体，所以我们要想让点单独成为一个 token，就要加入空格，这样写：
console.log(12 .toString())

// 以0x 0b 或者0o 开头时，表示特定进制的整数
console.log(0xFA)
console.log(0o73)
console.log(0b10000)

// 数字直接量还支持科学计数法，
console.log(10.24E+2);
console.log(10.24e-2);
console.log(10.24e2);

// 单双引号的区别仅仅在于写法，
// 在双引号字符串直接量中，双引号必须转义，
// 在单引号字符串直接量中，单引号必须转义


// 在正则表达式[ ]中的/就会被认为是普通字符
console.log(/[/]/.test("/")); //true
var b= 11,d = 10;
console.log(`a${b}c${d}e`)

function f(){
    console.log(arguments);
}
var a = "world";
f`Hello ${a}!`
