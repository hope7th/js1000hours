// JavaScript 引入了 Promise，这样，不需要浏览器的安排，JavaScript 引擎本身也可以发起任务了
// 我们把宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务。
//  Promise 永远在队列尾部添加微观任务。setTimeout 等宿主 API，则会添加宏观任务。
// 宏观任务的队列就相当于事件循环。

function sleep(duration) {
    return new Promise(function (resolve, reject) {
        console.log("hahaha")
        setTimeout(resolve, duration);
    })
}

sleep(1000).then(() => console.log("finished"));

var r = new Promise(function (resolve, reject) {
    console.log("a");
    resolve()
});
setTimeout(() => console.log("d"), 0)
r.then(() => console.log("c"));
console.log("b")



setTimeout(() => console.log("d1"), 0);
console.log("--------------")
var r1 = new Promise(function (resolve, reject) {
    resolve()
});
r1.then(() => {
    var begin = Date.now();
    while (Date.now() - begin < 5000);
    console.log("c1")
    new Promise(function (resolve, reject) {
        resolve()
    }).then(() => console.log("c2"))
});

function sleep1(duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, duration)
    })
}

async function foo() {
    console.log("a2");
    await sleep1(2000);
    console.log("b2");
}

foo();
console.log("--------------")

// async 函数必定返回 Promise，我们把所有返回 Promise 的函数都可以认为是异步函数


function sleep2(duration){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,duration)
    })
}

async function foo3(name){
    await sleep2(2000);
    console.log(name);
}
async function foo2(){
    await foo3("a3");
    await foo3("b3");
}

console.log("--------------")
foo2();
