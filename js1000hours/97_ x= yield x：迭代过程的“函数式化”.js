function *foo(){
    yield 5;
    yield 4;
    yield 3;
    yield 2;
    yield 1;
}

function *foo2(x=5) {
     while (x--) yield x;
    }


let x = new Object;
x[Symbol.iterator] = foo;
console.log(...x)

//yield操作最大的特点是它在挂起当前函数时，还将函数所在栈上的执行现场移出了调用栈。

/**
 * 所以yield发生时需要向这个数据帧（作用域链）外层检索到第一个函数帧（FunctionEnvironment），并挂起包括它内部的全部环境。而执行位置，将会通过函数的调用关系，一次性地返回到上一次 tor.next() 的下一行代码。
 * 也就是说相当于在 tor.next() 内部执行了一次return。
 */


 /**
  * “所有的代码文本”意味着“.js 文件”的全局入口也会被封装成一个函数，且全部的模块顶层代码也会做相同的封装。
  * 这样一来，所有通过文件装载的代码文本都会只存在于同一个函数中。
  * 由于在 Node.js 或其他一些具体实现的引擎中，
  * 无法同时使用标准的 ECMAScript 模块装载和.js 文件装载，
  * 因此事实上来说，这些引擎在运行 JavaScript 代码时（通常地）也就只有一个入口的函数。
  */