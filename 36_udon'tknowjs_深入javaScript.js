var a;
console.log(typeof a);
a = 'hellow word'
console.log(typeof a);
a = 42;
console.log(typeof a);
a = true;
console.log(typeof a);
a = null;//bug 永久
console.log(typeof a);
a = undefined;
console.log(typeof a);
a = {b:'c'}
console.log(typeof a);

a = Symbol("hello word")//符号起初被设计用于创建对象私有成员
console.log(typeof a);

var obj = {
    a:'hello word!',
    'hello word!':'a'
}
//如果属性名中有特殊字符的话，那么中括号表示法就会很有用，
console.log(obj.a)
console.log(obj["hello word!"])


//javascript的"封箱"
var a= 'hello word!'
var b = 3.1415926
console.log(a.length);
console.log(a.toUpperCase())
console.log(b.toFixed(2))
//为什么字符串有方法，存在一个 String(S 大写)对象封装形式，通常称为“原生的”，与基本类型相对应
//

//js "假的值"
//"",0,-0,NaN,null,undefined,false
//对象的子类型：数组
var arr = ["hello world",42,true]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(typeof arr);
//数组是特殊的对象(正如 typeof 所暗示的那样)，所以它们也可以有属性，其中包括 自动更新的 length 属性。
arr.hh ='hh'
console.log(arr.hh)//哈哈，将数组当做普通对象使用，虽然极不合理，但是人家能用啊
console.info(arr)
console.log(arr[2]);
//对象的字类型：函数
function foo() {
    return 42;
}
foo.bar = 'hello world';
console.info(typeof foo)
console.info(typeof foo())
console.info(typeof foo.bar)
//函数也同样是对象的一个子类型，因为 typeof 返回 "function"，这意味着 function 是一 个主类型


//内置类型方法
var a = 'hello world'
var b = 3.14159;
console.log(a.length) //把string 封装成String对象，然后才能调用方法
console.log(a.toUpperCase())
console.log(b.toFixed(4))//把number封装成Number对象，然后才能调用方法
//
// 简单地说，存在一个 String(S 大写)对象封装形式，通常称为“原生的”，与基本 string
// 类型相对应;这个对象封装在其原型中定义了 toUpperCase() 方法。
// 像前面的代码片段中那样将 "hello world" 这样的原生值作为对象使用时，在引用其属性 和方法时(比如 toUpperCase())，
// JavaScript 会(暗自)自动地将这个值“封箱”为其对应 的对象封装。

var a ='42';
var b = Number(a)
console.log(a)
console.log(b)
console.log(typeof b)

var a = '42'
var b = a * 1;
console.log(a)
console.log(b)
console.log(typeof b)

//真与假,非布尔值转化为布尔值得时候真假转换原则
//假：""，0，-0，NaN,null,undefined,false
//真："hello",42,true,[],[2,'3'],{},{a:42},function foo(){}

//相等,==,允许隐私转换，===，不允许隐式转换
console.log(a==b)//是a转换成了b呢，还是b转换成了a呢，答案是"42"转化成了42,为啥内
console.log(a===b)
var a = [1,2,3]
var b = [1,2,3]
var c = '1,2,3'
console.log(a==b)//数组转化成了字符串，进行了比较
console.log(b==c)
console.log(a==b)

//不等关系，<,>,<=,>=
//比较 JavaScript 中的字符串值的不等关系，这是按照常见的字母表规则来比较的 ("bar" < "foo")。
console.log("bar"<"foo")
a = 41;
b = "42";
c = "43";
console.log(a<b)
console.log(b<c)

//那么比较按照字典顺序(即字典中的字母表顺序)进行。如果其中 一边或两边都不是字符串，就像在 a < b 中那样，那么这两个值的类型都转换为数字，然 后进行普通的数字比较。

var a = 42;
var b = "foo"//被转化为NaN
console.log(a<b)
console.log(a>b)
console.log(a==b)

//这是因为 < 和 > 比较中的值 b 都被类型转换为了“无效 数字值”NaN，规范设定 NaN 既不大于也不小于任何其他值。
