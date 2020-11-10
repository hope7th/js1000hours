// 定义四则运算：产出四则运算的词法定义和语法定义。
// 词法分析：把输入的字符串流变成 token。
// 语法分析：把 token 变成抽象语法树 AST。
// 解释执行：后序遍历 AST，执行得出结果。

1+2*3;

Token
    Number: 1 2 3 4 5 6 7 8 9 0 的组合
    Operator: + 、-、 *、 / 之一
Whitespace: 
LineTerminator：