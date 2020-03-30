/* export <let/const/var> x ...;
   export function x() ...
   export class x ...
   export {x, y, z, ...};
   导出“（重命名的）名字” export { x as y, ...};export { x as default, ... };
   导出“（其它模块的）名字” export ... from ...;
  关于导出声明的、重命名的和其它模块的名字这三种情况，其实都比较容易理解，就是形成一个名字表，
让外部模块能够查看就可以了。*/

/* 导出“值”export default <expression

// ECMAScript 6 模块约定了一个称为"default"的名字，用于来导出当前模块中的一个“值”。
// 显然的，由于所谓“值”是表达式的运算结果，所以这里的语法形式就是：export default;

// 一个是在 JavaScript 中，一般的字面量也是值、也是单值表达式，因此导出这样一个字面量也是合法的：

export default 2;
export default "some message";

var varName = 100;
export default {
    varName, // 直接导出名字
    propName:123,// 导出值
    funcName:function(){},// 导出函数
    foo(){} //或导出与主对象相关联的方法
}

*/

// import {
//     x
// } from "...."

// （与 export 类似）按照语法在当前模块中声明名字，例如上面的x；添加一个当前模块对目标模块的依赖项。
//  JavaScript 就可以依据所有它能在静态文本中发现的import语句来形成模块依赖树，最后就可以找到这个模块依赖树最顶端的根模块，并尝试加载之。

// export var x = 100;
// 其实是先在“某个名字表”中登记一个“名字 x”就可以了。这个过程也就是 JavaScript 在模块装载之前对 export 所做的全部工作。


// JavaScript 就可以依据所有它能在静态文本中发现的import语句来形成模块依赖树，最后就可以找到这个模块依赖树最顶端的根模块，并尝试加载之。


/*
    在“模块 export/import”语法中 ，JavaScript 是依赖 import 来形成依赖树的，与 export 无关。但是直到目前为止（我的意思是直到找到所有导入和导出的名字，并完成所有模块的装配的现在为止），没有任何一行用户的 JavaScript 代码是被执行过的。至于原因，从本讲的最开始我就讲过了：这个 export/import 过程中，源代码只被理解为静态的、没有逻辑的“代码文本”。
    那么既然“没有逻辑”，又怎么可能执行类似于：
    这个 export/import 过程中，源代码只被理解为静态的、没有逻辑的“代码文本”。
    那么既然“没有逻辑”，又怎么可能执行类似于：export default expression;中的“expression”呢？要知道所谓表达式，就是程序的计算逻辑啊。
    所以，这里先得到第一个关键结论
    在处理 export/import 语句的全程，没有表达式被执行！
 */

/* 导出名字与导出值的差异
export default <expression>; 中的“expression”在导入导出中完全不起作用（不执行）
export var x = 100;
它们都只是导出一个名字，只是前者导出的是“default”这个特殊名字，而后者导出的是一个变量名“x”。

 就是在前面所说的“某个名字表”中添加“一个登记项”而已。也正是如同var x = 100;在执行阶段需要有一个将“值 100”绑定给“变量 x（的引用）”的过程一样，
 这个export default ...;语句也需要有完全相同的一个过程来将它后面的表达式（expression）的结果绑定给“default”这个名字。
 如果不这么做，那么“export default”在语义上的就无法实现导出名字“default”了——在静态装配阶段，
 名字“default”只是被初始化为一个“单次绑定的、未初始化的标识符”。

*/

// 模块的装配过程
/*
找到并遍历模块依赖树的所有模块（这个树是排序的），
然后执行这些模块最顶层的代码（Top Level Module Evaluation）。
在执行到上述var default ....（或类似对应的export default ...）语句时，
执行后面的表达式，并将执行结果（Result）绑定给左侧的那个变量就可以了。
如此，直到所有模块的顶层代码都执行完毕，那么所有的导出名字和它们的值也都必然是绑定完成了的。
同样，由于 import 的名字与 export 的名字只是一个映射关系，所以 import 的名字——所对应的值——也就初始化完成了。
再确切地说（这是第二个关键结论）：所谓模块的装配过程，就是执行一次顶层代码而已。

*/

// export default function () {}


/* 
匿名函数表达式可以理解为一个函数的“字面量（值）”。理解“字面量值”这个说法是很有意义的 
“字面量（值）没有名字”就意味着执行这个“单值表达式”不会在当前作用域中产生一个名字，即使这个函数是具名的，
*/


/* 
    具名函数作为表达式时，名字在块级作用域中无意义。
    x1~3 都是具有不同的语义的。其中，x2 是不会在当前作用域（示例中是全局）中登记为名字的。
    */

var x1 = function x2() {

}

function x3() {

}

// export default function(){}
// export default function x(){}

/** 
 * 导出一个匿名函数，或者一个具名的函数的时候，这两种情况下是不同的。
 *  它们都是不可能在当前作用域中绑定给default这个名字，作为这个名字对应的值的。
 */

 /**
  * 如果后面的表达式是匿名函数声明，
  * 那么它将强制在当前作用域中登记为“default”这样一个特殊的名字，
  * 并且在执行时绑定该匿名函数。所以，尽管语义上我们需要将它登记为类似var default ...所声明的名字“default”，
  * 但事实上它被处理成了一个不可访问的中间名字，然后影射给该模块的“某个名字表”。
  */

  
  var obj = {
      "defaultsss":function(){} 
  }
 
  var obj2 = {
      "default":function ss(){}
  }

//   。一方面，这种关联不是严格意义上的“名字 -> 值”的绑定语义；另一方面，当该函数关联给名字（aName）时，JavaScript 又会反向地处理该函数（作为对象f）的属性f.name，使该名字指向aName。

// 它并不是导出了一个匿名函数表达式，而是导出了一个匿名函数定义（Anonymous  Function  Definition）。

  console.log(obj.defaultsss.name) //defaultsss
  console.log(obj2.default.name) // ss
  /**
   * 它并不是导出了一个匿名函数表达式，
   * 而是导出了一个匿名函数定义（Anonymous  Function  Definition）。
   * 该匿名函数初始化时才会绑定给它左侧的名字“default”，
   * 这会导致import f from ...之后访问f.name值会得到“default”这个名字
   */