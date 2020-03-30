// 绝大多数 JavaScript 语句都并没有自己的块级作用域。

// switch语句被设计为有且仅有一个作用域，无论它有多少个 case 语句，其实都是运行在一个块级作用域环境中的。

var x = 100,
    c = 'a';
try {
    switch (c) {
        case 'a':
            console.log(x);
            break;
        case 'b':
            let x = 200;
            //var x = 200;
            break;
    }
} catch (e) {
    console.info(e)
    console.log("-------------------")
}


/**
 * switch 语句内是无法访问到外部变量x的，即便声明变量x的分支case 'b'永远都执行不到。
 * 这是因为所有分支都处在同一个块级作用域中，所以任意分支的声明都会给该作用域添加这个标识符，从而覆盖了全局的变量x。
 */

// 显而易见的块级作用域

try {
    //：作用域1
} catch (e) {
    //：作用域2
} finally {
    //：作用域3
}

var obj = {
    a: 1,
    b: 2,
    c: 3
}
with(obj) {
    a = 2;
    b = 3;
    c = 4;
}

console.info(obj)
/**
 * 并不是所有的循环语句都有自己的块级作用域，
 * 例如 while 和 do…while 语句就没有。
 * 而且，也不是所有 for 语句都有块级作用域。
 * for (<let/const> …) …
 */


var x1 = 100;
for (let x1 = 102; x1 < 105; x1++) {
    console.log('value:', x1);
}
console.log("outer", x1)

var x2 = 100;
for (var x2 = 108; x2 < 110; x2++) {
    console.log("varlue:", x2)
}
console.log("outer", x2)

/**
 * 因为for语句的这个块级作用域的存在，导致循环体内访问了一个局部的x值（循环变量），而外部的（outer）变量x是不受影响的。
 */

try {
    for (let x3 = 102; x3 < 105; x3++) 
        // 　let x3 = 103; //Lexical declaration cannot appear in a single-statement context
         console.log(x3)

    for (let x3 = 102; x3 < 105; x3++) {
        let x3 = 103; //没有报错
    }
    
} catch (e) {
    console.log("--------------")
    console.log(e)
}

//循环语句（对于支持“let/const”的 for 语句来说）“通常情况下”只支持一个块级作用域。
for (let i=0; i<2; i++) /* 用户代码 */;

// “只有一个块级作用域”的设计，将会导致“用户代码”直接运行在与“let 声明”相同的词法作用域中。对于这个例子来说，这一切还好，因为“let i = 0”这个代码只执行了一次，因为它是 for 语句的初始化表达式。


// for (let i in x) ...;
// “let i …”在语义上就需要被执行多次——因为在静态结构中它的多次迭代都作用于同一个语法元素
// 在 JavaScript 引擎实现“支持 _let/const_ 的 for 语句”时，就在这个地方做了特殊处理：为循环体增加一个作用域
// 在 JavaScript 的具体执行过程中，作用域是被作为环境的上下文来创建的。如果将 for 语句的块级作用域称为 forEnv，并将上述为循环体增加的作用域称为 loopEnv，那么 loopEnv 它的外部环境就指向 forEnv。

var x4 =[1,2,3,5]
for (let i in x4) setTimeout(()=>console.log(i), 3000); //0,1,2,3

// 这个 loopEnv 就必须是“随每次迭代变化的”。也就是说，需要为每次迭代都创建一个新的作用域副本，这称为迭代环境（iterationEnv)。因此，每次迭代在实际上都并不是运行在 loopEnv 中，而是运行在该次迭代自有的 iterationEnv 中。