// 1:this肯定指向某个对象
// 2：箭头函数最大的优点是：解决了this执行函数所造成的问题
// 3:"use unstrict"下this没有直接调用对象，他指向windows。“use strict”下它指向windows。严格模式和非严格模式，只在执行作用域中才起作用。

var name = "the windows";
var object = {
    name:"my object",
    getNameFun:function(){
        return function(){
            return this.name
        }
    }
}
console.log(object.getNameFun()())
console.info((function(){ return this; })())

var object2 = {
    name:"my object",
    getNameFun:function(){
        return function(){
            // 'use strict';
            return this.name
        }
    }
}

console.log(object2.getNameFun()())
console.info((function(){ 'use strict';return this; })())


// 箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。
var obj = {
    func:function(){
        console.log(this)
    },
    say:function(){
        setTimeout(() => {
            console.log(this)
        }, 1000);
    }
}

obj.func();//obj
obj.say();//obj

var obj2 = {
    func:function(){
        console.log(this)
    },
    say:function(){
        setTimeout(function(){
            console.log(this)
        }, 1000);
    }
}

obj2.func();//obj2
obj2.say();//windows