// 你只要理解了最简单榜的前三名，也就理解了设计一门计算机语言的基础模型与逻辑。


/**
 * throw语句在 ECMAScript 规范描述中，它的执行实现逻辑只有三行：
 * ThrowStatement : throw  Expression;
 * 1.Let exprRef be the result of evaluating Expression.
 * 2.Let exprValue be ? GetValue(exprRef).
 * 3.Return ThrowCompletion(exprValue).
 * ThrowCompletion() 调用其实是一个简写，完整的表示法是：
 * Return Completion { [Type]: exprValue, [[Target]]: empty }
 */


/**
 * avaScript 语句执行是有值（Result）的”这一事实。
 * 也就是说，任何 JavaScript 语句执行时总是会“返回”一个值，包括空语句。
 * .Return NormalCompletion(empty).
 * Return Completion { [Type]: argument, [[Target]]: empty }
 * 而传入参数 argument 在这里是 empty，这是 ECMAScript 规范类型中的一个特殊值
 */

/**
 * 在 ECMAScript 中，所有语句都被解析成待处理的结点，最顶层的位置总是被称为 _Script_ 或 _Module_ 的一个块（块语句），其他的语句将作为它的一级或更深层级的、嵌套的子级结点，
 * 这些结点称为“Parse Node”，它们构成的整个结构称为“Parse Tree”。
 * 语句总是一个树或子树，而表达式可以是一个子树或一个叶子结点。
 * 空语句可以是叶子结点，因为没有表达式来作为它的子结点。
 */

/**
 * 所谓“顺序执行的语句”表现在 _“Parse Tree_”这个树上，就是同一级的子树。
 * 它们之间平行（相同层级），并且相互之间没有“相互依赖的运算”，
 * 所以它们的值（也就是尝试执行它们共同的父结点所对应的语句）就将是最后一个语句的结果。
 * 所有顺序执行语句的结果向前覆盖，并返回最终语句的结果（Result）。
 */

// 表达式的顺序执行
1, 2, 3, 4

// 语句的顺序执行
1;
2;
3;
4;


// 通过分组来组合表达式
(1, 2, 3, 4)
// 通过块语句来组合语句
{
    1;
    2;
    3;
    4;
}

/**
 * 所谓“语句的执行者”，其实就是它外层的语句；
 * 而最外层的语句，总是被称为 _Script_ 或 _Module_ 的一个块，
 * 并且它会将结果返回给 shell、主进程或eval()。
 */

/**
 * 语句的五种完成状态（normal, break, continue, return, 以及 throw）中，
 * “Nomal（缺省状态）”大多数情况下是不被读取的，break 和 continue 用于循环和标签化语句，
 * 而 return 则是用于函数的返回值。
 * 于是，所有的状态中，就只剩下了本讲标题中的throw 1所指向的，也就是“异常抛出（throw）”这个状态。
 * return 语句总是显式地返回值或隐式地置返回值为 undefined，也就是说它总是返回值，
 * 而 break 和 continue 则是不携带返回值的。
 */

/**
 * 在块中的多个语句顺序执行时，遵从两条规则：在向前覆盖既有的语句完成值时，empty值不覆盖任何值；
 * 部分语句在没有有效返回值，且既有语句的返回值是empty时，默认用undefined覆盖之。
 */

console.log(
    eval(`{;1;2;;x:break x}`) //2
)

console.log(
    eval(`{;1;;}`) //2
)
//第 1 行代码执行结果返回empty，于是第 2 行的结果1覆盖了它；而第 3 行的结果仍然是empty所以不导致覆盖

/**
 * 这出现在 if、do…while、while、for/for…in/for…of、with、switch 和 try 语句块中。
 * 在 ECMAScript 6 之后，这些语句约定不会返回 empty，
 * 因此它的执行结果“至少会返回一个 undefined 值”
 */


console.log(
    eval(`{2;if(true);}`)
)
/**
 * 由于 ES6 约定if语句不返回empty，所以第 1 行返回的值2将被覆盖，
 * 最终显示为undefined。
 */

/**
 * 引用的值
 * 而引用是不能直接作为最终求值的操作数的。因此引用实际上不能作为语句结果来返回
 * 所以在语句返回值的处理中,总是存在一个“执行表达式并‘取值’”的操作，
 * 以便确保不会有“引用”类型的数据作为语句的最终结果。
 * Let exprValue be ? GetValue(exprRef).
 */
try {
    throw 1;
} catch (e) {
    console.log(e);
}

/**
 * 当外层的处理逻辑发现是一个引用时，会再根据当前逻辑的需要将“引用”理解为左操作数（取引用）或右操作数（取值）；
 * 否则当它是一个完成记录时，就尝试检测它的类型，也就是语句的完成状态（throw、return、normal 或其他）。
 */

/**
 * 它也可能溢出到代码的最顶层，成为根级Parse Node，
 * 也就是Script或Module类型的全局块的返回值。
 * 这时，引擎或 Shell 程序就会得到它，于是……你的程序挂了。/
 */

 /**
  * 循环语句用于处理非标签化的 continue 与 break，并处理为 normal；否则，标签语句用于拦截那些“向外层返回”的 continue 和 break
  * 如果能处理（例如是目标标签），则替换成 normal。
  * 函数的内部过程[[Call]]，将检查“函数体执行”（将作为一个块语句执行）所返回状态是否是 return 类型，如果是，则替换成 normal。
  */
