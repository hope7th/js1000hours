//js 无真正意义上的整数
var a = 42.;
var b = .42;

var  c = 5E10;
console.log(c.toExponential())

//tofixed()指定小数部分显示位数
var d = 42.59;
console.log(d.toFixed(1))

//toPrecision() 有效位
console.log(d.toPrecision(5))

//适用于数字常量
console.log(42..toFixed(5))
//console.log(42.tofixed()) 无效语法，因为'.'被视为42.的一部分
console.log(42 .toFixed(7))//有空格被视为有效的

//用指数E形式来表示较大的数字
var onethousand = 1E3
var onemilliononhundredthousand = 1.1E6
console.log(onethousand)
console.log(onemilliononhundredthousand)

//十六进制，二进制，八进制
var hh16 = 0xf3;
var hh8 = 0o363;

console.log(hh8);
console.log(hh16)
