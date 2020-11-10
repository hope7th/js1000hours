/**
 * 
 * 普通语句
 * 语句块
 * 空语句
 * 表达式语句
 * if语句
 * switch语句
 * 
 * 循环语句
 * for循环
 * for in 循环
 * for of 循环
 * for await of 循环
 * while循环
 * do while 循环
 * 
 * return 语句
 * break 语句
 * continue 语句
 * with 语句
 * throw 语句
 * try 语句
 * debugger 语句 
 **/

/**
 * 声明型语句
 * var语句
 * let语句
 * const语句
 * class声明
 * 
 * 函数声明
 * 普通函数声明
 * async函数声明
 * genertor函数声明
 * async generator函数声明
 */

console.log("----语句块-----") 
{
    var x, y;
    x = 10;
    y = 20;
} 

{
    let x1 = 1
}
try {
    console.log(x1)
} catch (e) {
    console.log(e)
}

console.log("--------------end")

console.log("--------空语句--------")
//空语句就是一个分号
;
console.log("--------------end");
console.log("--------if语句")
var a = 20;
if (a < 10) {
    //...
} else if (a < 20) {
    //...
} else if (a < 30) {
    //...
} else {
    //...
}
console.log("----------------end");
console.log("-------switch------语句");
var num = 10;
switch (num) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    default:
        console.log(10);
}
console.log("----------------end");
console.log("-----------while 循环和 do while 循环---------");
let a1 = 10;
while (a1--) {
    console.log("*")
}
let a2 = 11;
do {
    console.log(a2)
} while (a2 < 10)
//这里 do while 循环无论如何至少会执行一次。
console.log("---------------end")
console.log("-----------普通 for 循环--------")


for (i = 0; i < 5; i++)
    console.log(i);

for (var i = 0; i < 5; i++)
    console.log(i);

for (let i = 0; i < 5; i++)
    console.log(i);

var j = 0;
for (const i = 0; j < 5; j++)
    console.log(i);
console.log("---------------end")

console.log("---------for in 循环---------");
let o = {
    a: 10,
    b: 20
}
Object.defineProperty(o, "c", {
    enumerable: false,
    value: 30
});
for (let p in o)
    console.log(p)
//c 这个属性时，enumerable 为 true，则 for in 循环中也能枚举到它。
console.log("------------end");




console.log("---------for of 循环和 for await of 循环-----------");
for (let e of [1, 2, 3, 4, 5])
    console.log(e);

// 但是实际上，它背后的机制是 iterator 机制
// 我们可以给任何一个对象添加 iterator，使它可以用于 for of 语句

let o1 = {
    [Symbol.iterator]: () => ({
        _value: 0,
        next() {
            if (this._value == 10) {
                return {
                    done: true
                }
            } else {
                return {
                    value: this._value++,
                    done: false
                }
            }
        }
    })
}

for (let e of o1) {
    console.log(e)
}

// 但是，在实际操作中，我们一般不需要这样定义 iterator，我们可以使用 generator function。

function* foo() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}
for (let e of foo()) {
    console.log(e)
}

try{
    function sleep(duration) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, duration)
        })
    }
    
    async function* foo1() {
        i = 0;
        while (true) {
            await sleep(1000);
            yield i++
        }
    }
    // for await (let e of foo1()) {
    //     console.log(e);
    // }
}catch(e){
    console.log("node环境下一直报错，所以用try catch")
}

console.log("--------------end")


console.log("---------return语句---------")

function squre(x) {
    return x * x;
}
console.log("--------------end")

console.log("-------break 语句和 continue 语句--------")

outer:for(let i = 0; i < 100; i++)
    inner:for(let j = 0; j < 100; j++)
        if( i == 50 && j == 50)
            break outer;
outer:for(let i = 0; i < 100; i++)
    inner:for(let j = 0; j < 100; j++)
        if( i >= 50 && j == 50)
            continue outer;
console.log("----------------end");

console.log("---------with 语句----------")
let  o2 = {a:1,b:2};
with(o2){
    console.log(a, b);
}
console.log("----------------end");
console.log("---------break 语句和 continue 语句----------")
outer:for(let i =0;i<100;i++)
    inner:for(let j =0;j<100;j++)
        if(i==50&&j==50){
            console.log(i,j);
            break outer;
        }
            
outer1:for(let i = 0;i<100;i++)
    inner1:for(let j = 0;j<100;j++)
        if(i>=50&&j==50){
            console.log(i,j);
            continue outer1;
        }
           
console.log("-------------end")
console.log("----------try 语句和 throw 语句-------")

try {
    throw new Error("error");
} catch(e) {
    console.log(e);
} finally {
    console.log("finally");
}

console.log("------------end")
console.log("--------debugger 语句--------")
//debugger 语句的作用是：通知调试器在此断点。
console.log("---------------end")

console.log("---------var语句---------")
//var 声明对全局作用域的影响，它是一种预处理机制
var x =1,y = 2;
console.log(x,y);
for(var x = 0;x<10;x++){
    console.log(x)
}
{
    let x = 1,y = 2;
    console.log(x,y);
}
for(let x = 0;x>10;x++){
    console.log(x);
}
console.log("--------------end")