 /**
  * 模板，其实就是一种特殊的可执行结构。
  * 所有特殊可执行结构其实都是来自于某种固定的、确定的逻辑。这些逻辑语义是非常明确的，
  * 输入输出都很确定，
  * 这样才能被设计成一个标准的、易于理解的可执行结构。
  */

  /** 参数表
   * 对于函数来说，参数表是在函数调用时传入的参数 0 到 n；
   * 对于构造器以及构造器的 new 运算来说，参数表是 new 运算的一个运算数。
   * handler.apply = function(target, thisArgument, argArray) {  ...}
   * argArray表示为一个数组，按照传入参数逐一匹配出来的。这个所谓“逐一匹配”
   * 
   * 其一，javaScript 中有个东西没有参数表，那就是箭头函数
   * 其二，我们还要知道 JavaScript 中有种形式参数的风格，
   */

   /**
    * 扩展风格的参数表,缺省参数
    */
   var x = 0;
   function foo(i=x++){
       console.log(i);
   }
   foo();
   foo();

   function foo0(...args){
       console.log(args)
   }
   foo0("a",'b','c')

    // 那么这个参数展开是怎么实现的呢？答案是迭代器。


   var x1 = 2;
   foo = (...args) => console.log(...args);
   foo(`${x1}`) // 2
   foo `${x1}` // [ '', '' ] 2
   