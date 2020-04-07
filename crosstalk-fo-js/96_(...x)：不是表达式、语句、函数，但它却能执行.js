//递归
const f = x => f(--x)
//迭代
 function foo(x=5){
     return {
         next:()=>{
             return {done:!x,value:x&&x--}
         }
     }
 }

 var tor = foo(5),result = tor.next();
 while(!result.done){
     console.log(result.value);
     result = tor.next()
 }

 // 如果有一个对象“包含”这样一个迭代器函数（以返回一个迭代器），那么这个对象就是可迭代的
// 这个迭代函数被设计为称为“Symbol.iterator”的符号属性
 let x = new Object;
x[Symbol.iterator] = foo;
console.log(...x)

// ...x既不是表达式，也不是语句。它不是我们之前讲过的任何一种概念，而仅仅只是“语法”。

function touch(x){
    if(x==2) throw new Error("hard break");
}

function foo2(x=5){
    return {
        next:()=>{
            touch(x)
            return {done:!x,value:x&&x--}
        }
    }
}

let x2 = new Object;
x2[Symbol.iterator] = foo2;
try{
    console.log(...x2)
}catch(e){
    console.log(e)
    console.log("----------------")
}
try {
    for(let i of x2) console.log(i)
}catch(e){
    console.log(e)
    console.log("----------------")
}

// 这个看不懂
console.log(Object.getOwnPropertyNames(tor.constructor))
console.log(Object.getOwnPropertyNames(x2.constructor.prototype))


function foo3(x=5){
    return {
        next:()=>{
            return {done:!x,value:x&&x--}
        },
        return:()=>console.log("------RETUREN")
    }
}
let x3 = new Object;
x3[Symbol.iterator]=foo3;
for (let i of x3){
    console.log(i);
    // break; Iterator result undefined is not an object
};


function foo4(x=5){
    return {
        "next":()=> {throw new Error},
        "throw":()=> console.log("THROW!")
    }
}
let x4 = new Object;
x4[Symbol.iterator] = foo4;
// console.log(...x4)

function foo5(x=5){
    return {
        next:()=>{
            return {done:!x,value:x&&x--}
        },
        "return":()=>console.log("return!"),
        "throw":()=>console.log("throw!")
    }
}
let x5 = new Object;
x5[Symbol.iterator] = foo5;
console.log(...x5)
/**
 * 迭代过程并不是一个语法执行的过程，而是应该理解为一组函数执行的过程；
 * 对于这一批函数执行过程中的结束行为，也应该理解为函数内的异常或退出。
 */

for (let i of x5) {  
    console.log(i)
    if (i == 2){
       
        // break;
    }
        
}

// 由于 for .. of语句将获得 x 对象的迭代变量 tor，那么它也将管理 x 对象的迭代过程。




