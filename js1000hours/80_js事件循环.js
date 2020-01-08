// javascript是一门单线程语言。

// 1：调用栈
// 调用栈是JS引擎的一部分，而不是浏览器特有的。本质上它是一个栈，后进先出 （Last In, First Out. 即 LIFO） 的特点。当一个函数调用完成，它就被从调用栈中弹出。

function greet(){
    return "hello!"
}

function respond(){
    return setTimeout(()=> {
        return "Hey!"
    },1000)
}

greet()
respond()

// greet先进入调用栈，执行完成后弹出。然后respond和setTimeout分别进入调用栈，执行完成后setTimeout弹出，然后respond弹出。
// setTimeout 正是 Web API 提供的功能之一：它可以让我们延迟一个任务的执行并且不阻塞主线程。

// 在 Web API 中，一个定时器已经创建，它将会等待 1000 ms，当时间到后，这个箭头函数并不会立即被调用栈执行，它会被添加到一个队列中，我们暂且称之为 任务队列 （原文中叫 Callback Queue）。


// 事件循环
// Event Loop 的唯一任务就是 连接任务队列和调用栈：它不停检查 调用栈 中是否有任务需要执行，如果没有，就检查 任务队列，从中弹出一个任务，放入调用栈中，如此往复循环。

const foo = ()=>console.log("First");
const bar = ()=>setTimeout(()=>console.log("second"),500);
const baz = ()=>console.log("Third");

bar();
foo();
baz();

// 1:我们调用了函数 bar。bar 返回了一个 setTimeout 函数。
// 2:setTimeout 中的回调函数被添加到 Web API，setTimeout 函数和 bar 调用完成被从调用栈弹出。
// 3:定时器开始，同时函数 foo 被调用，打印出 First。foo 函数返回 undefined。
// 4:函数 baz 被调用，打印出 Third。
// 5:500ms 定时器结束，回调函数被放入任务队列，Event Loop 检查到调用栈是空的，所以将其取出放在调用栈。
// 6:回调函数被执行，打印出 Second。