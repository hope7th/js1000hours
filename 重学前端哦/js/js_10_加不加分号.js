let a = 1
void
function (a) {
    console.log(a)
}(a)

// 要有换行符，且下一个符号是不符合语法的，那么就尝试插入分号。
// 有换行符，且语法中规定此处不能有换行符，那么就自动插入分号。
// 源代码结束处，不能形成完整的脚本或者模块结构，那么就自动插入分号。

var a1 = 1,
    b = 1,
    c = 1;
a1
++
b
++
c 
console.log(a1,b,c)
// 有换行符，++是合法的语法，但是JavaScript 标准定义中，有[no LineTerminator here]的规则
// 所以结果为，1，2，2



// console.log(...) is not a function
;(function(a){
    console.log(a)
})()
;(function(a){
    console.log(a)
})()
function f(){
    return 
    /**
     * This is a return value.
     * 带换行符的注释也被认为是有换行符
     */
}
console.log(f());
/**
 * no LineTerminator here 规则 不能插入换行符规则
 * 带有continue的语句，不能在continue后插入换行符
 * 带有标签的break语句，不能在break后插入换行符
 * return 后不能插入换行符
 * 自增，自减前面不能插入换行符
 * throw和exception之间不能插入换行符
 * async后面不能插入换行符号
 * 箭头函数箭头前不能插入换行
 * yield后，不能插入换行
 */