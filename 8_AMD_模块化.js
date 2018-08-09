//AMD,Asynchronous Module Definition,异步模块定义
// require(['math'],function (math) {
//
//     math.add(2, 3);
//
// });
//1:原始写法
var module1 = new Object({
    _count:0,
    m1:function () {
        console.log("m1")
    },
    m2:function () {
        console.log("m2")
    }
});

console.info(module1);
module1.m1();
module1._count = 5;
console.log(module1._count);
//外部代码可以直接改变内部计数器的值。

//2:立即执行函数写法

var module2 = (function(){

    var _count = 4;

    var m1 = function(){
        //...
        console.log("module2->m1")
    };

    var m2 = function(){
        //...
        console.log("module2->m2")
    };

    return {
        count:_count,
        m1 : m1,
        m2 : m2
    };

})();

console.info(module2.count);
console.info(module2.m1);

//放大模式,module1模块添加了一个新方法m3()


var module3 = (function (mod) {
    mod.m3 = function () {
        console.log("m3")
    };
    return mod
})(module2||{});

console.info(module3.count);
module3.m1();
module3.m2();
module3.m3();

//http://www.ruanyifeng.com/blog/2012/11/require_js.html
//未完待续
