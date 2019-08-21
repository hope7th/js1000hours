var a = 'aa'&&'bb'
var b = 'aa'||'bb'
console.log(a)
console.log(b)

// 首先是&&，先计算左边表达式，如果它的值为false或可被转换为false(null、NaN、0或undefined),那么返回左边表达式的值，否则返回右边表达式的值
// 然后是||，先计算左边表达式，如果它的值为true或不可被转换为false(null、NaN、0或undefined),那么返回左边表达式的值，否则返回右边表达式的值
