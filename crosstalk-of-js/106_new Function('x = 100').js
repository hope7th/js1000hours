//函数的类化，动态和静态的再次统一

/**
 * 最后一对括号的使用”，由于运算符优先级的设计，它是在 new 运算之后才被调用的
 */

 new Function("x=100")();
 (new Function("x=100"))();
 var f = new Function('x=100')
 f()