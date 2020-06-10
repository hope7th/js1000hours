/**
 * JavaScript 也就是 typeof() 所支持的 7 种类型，
 * 其中的“对象（object）”与“函数（function）”算一大类，合称为引用类型，
 * 而其他类型作为值类型。
 * 
 * 德云社的相声分为逗哏和捧哏，函数是逗哏，对象是捧哏。
 * 五门功课：说学逗唱挠，string,number,Boolean，null，undefined，
 * 
 */ 

 //js类型转换
/**
 * 从值 x 到引用，调用 Object(x) 函数。
 * 从引用 x 到值，调用 x.valueOf() 方法；或调用 4 种值类型的包装类函数，例如 Number(x)，或者 String(x) 等等。
 * 
 * 如果 x 已经是一个对象，那么它只会返回原对象
 * 
 * 说学逗唱挠要转换成一个引用，需要塞到一个相声演员的肚子里。
 * 而引用类型拿到值，需要调用他说唱出来。
 */


var x = 1234
console.log(Object(x)) //[Number: 1234]

/**
 * 任何对象都会有继承自原型的两个方法，称为toString()和valueOf()
 */

 /**
  * “符号对象”这个东西，因为符号是值，不是对象
  * 现实中确实可以将一个“符号值”转换为一个“符号对象”
  */
x = Object(Symbol());
console.log(x)

//将对象转换为字符串，就只会得到一个“简单的描述”：
console.log((new Object).toString())

/**
 * JavaScript 约定，所有“对象 -> 值”的转换结果要尽量地趋近于 string、number 和 boolean 三者之一
 */



/**
 * 就是在使用Object(x)来转换得到的对象实例中添加一个内部槽，存放这个x的值。
 * 取出这个值，并返回给用户代码”的方法，就称为valueOf()。
 * 两行代码在语义上的效果是一致的
 * 每个相声演员都有自己特有的说的方法和学的方法
 * 加上 ES8 中出现的大整数类型（BigInt），一共就有了 5 个对应的私有槽：[[BooleanData] [[NumberData]]、[[StringData] [[SymbolData]]和[[BigIntData]]
 * obj = Object(x);
 * obj.[[PrimitiveValue]] = x;
 */

 /**
  * ECMAScript 6 之后还出现了Symbol.toPrimitive这个符号。
  * 而它，正是将原本的[[PrimitiveValue]]这个私有槽以及其访问过程标准化，
  * 然后暴露给 JavaScript 用户编程的一个界面。
  */


 console.log(Symbol())
  /**
   * symbol
   * “其他值类型 -> symbol”的这种转换，实际结果就是创建一个新符号，而没有“转换”的语义了。
   * 但它的结果只能表示这是一个符号，至于是哪个符号，符号 a 还是符号 b，全都分不出来。
   */


   /**
    * undefined、null、0、NaN、""（empty string）以及 BigInt 中的 0n 返回 false 之外，
    * 其他的值转换为 boolean 时，都将是 true 值
    */

    var x1 = 100;
    console.log(String(x1))
    console.log(Boolean(x1))
    

    //隐式转换，潜规则，要么拒绝“类型不太正确的参数”，抛出异常；要么用一种方式来使这些参数“变得正确”。
    console.log("aa1aa".search(1))
    console.log("000false111".search(10 > 5))

    //隐式转换特例
    console.log("隐式转换")
  //掉坑里了。。。。
    console.info([]+{})
    console.log({}+[])
    console.log([]+[])
    console.log({}+{})

    // 从值 x 到引用：调用 Object(x) 函数。
    // 从引用 x 到值：调用 x.valueOf() 方法；或，调用四种值类型的包装类函数，例如 Number(x)，或者 String(x) 等等。





