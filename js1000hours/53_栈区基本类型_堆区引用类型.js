var a = 10;
var b = 10;
var c = a;
a = 11;
console.log(a,b,c)

// 基本类型存储在栈内存中，引用类型存储在堆内存中，并且引用类型指向的是栈内存中的堆区地址

var a = {};
var b = {};
var c = a;
console.log(a==b)
a.name = "marry";
a.say =()=> console.log("hello world");
console.log(c.name);
console.log(c.say())