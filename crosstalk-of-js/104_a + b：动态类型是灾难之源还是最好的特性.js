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
   /**
    * 当需要引擎“推断目的”时，JavaScript 设定推断结果必然是三种基础值（boolean、number 和 string）。
    * 由于其中的 boolean 是通过查表来进行的，所以就只剩下了 number 和 string 类型需要“自动地、隐式地转换”
    */

    /**
     * JavaScript 约定：如果x原本就是原始值，那么ToPrimitive(x)这个操作直接就返回x本身
     * 
     * 如果x是一个对象，且它有对应的五种PrimitiveValue内部槽之一，那么就直接返回这个内部槽中的原始值
     */

     console.log(Object(5).valueOf())

     /**
      * 如果一个运算无法确定类型，那么在类型转换前，它的运算数将被预设为 number。
      */

      /**
       * NOTE1：预设类型在 ECMAScript 称为 PreferredType，它可以为 undefined 或"default"。但是“default”值是“传统的”类型转换逻辑所不能处理的，这种情况下，JavaScript 会先将它重置为“number”。也就是说，在传统的转换模式中，“number”是优先的。
       * NOTE2：事实上，只有对象的符号属性 Symbol.toPrimitive 所设置的函数才会被要求处理“default”这个预设。这也是在 Proxy/Reflect 中并没有与类型转换相关的陷阱或方法的原因。
       */



       /*如果是上述的五种包装类的对象实例（它们有五种PrimitiveValue内部槽之一），那么它们的valueOf()方法总是会忽略掉“number”这样的预设，并返回它们内部确定（即内部槽中所保留的）的原始值*/
       var x2 = Symbol();
       var obj2 = Object(x2)
       console.log(x2===obj2.valueOf())
       console.log(Object(5)+Object(5))

       /**
        * 如果用户代码试图得到“number”类型，但x.valueOf()返回的是一个对象，那么就还会调用x.toString()，并最终得到一个字符串。
        * 
        * 
        * 需要利用到对象的valueOf()和toString()方法：当预期是“number”时，valueOf()方法优先调用；否则就以toString()为优先。
        * 
        */

        console.log([typeof([].valueOf()),typeof({}.valueOf())])
        console.log([[].toString(),{}.toString()])
        console.log([]+{})
        console.log("=======")

var x3 = Symbol();
var obj3 = Object(x3);
console.log(obj3.valueOf()==x3);
/**
 * 如果是上述的五种包装类的对象实例（它们有五种PrimitiveValue内部槽之一），那么它们的valueOf()方法总是会忽略掉“number”这样的预设，
 * 并返回它们内部确定（即内部槽中所保留的）的原始值。
 */
console.log("========")

console.log(Object(5)+Object(5))

/**
 * 这个代码看起来是两个对象“相加”，但是却等效于它们的原始值直接相加。
 */

 console.log([]+{})
 console.log({}+[])
 {}+[];
 console.log({}+{}) 
 console.log([]+[])
 console.log("=======")

/**
 * 它们的左侧是一对大括号，而当它们作为语句执行的时候，会被优先解析成——块语句！并且大括号作为结尾的时候，
 * 是可以省略掉语句结束符“分号（;）”的。
 * 所以，你碰到了 JavaScript 语言设计历史中最大的一块铁板！就是所谓“自动分号插入（ASI）”
 * 
 * 
 */

 {}+[]
 {};+[]
 +Number([]) //0
{}+{}
+{}
+Number({}) //NaN,不对啊，nodejs上无法得出此结论
var x4 = {
  valueOf(){
    console.log('Call valueOf');
    return Symbol()
  },
  toString(){
    console.log("Call toString");
    return "abc"
  }
}


//会先调用x的 valueOf() 方法，然后由于“+”号的两个操作数都不是字符串，所以将再次尝试将它们转换成数字并求和
try {
  console.log(true+x4)
}catch(e){
  console.log(e)
}

class MyDate extends Date{
  valueOf(){
    console.log("call valueof");
    return Symbol()
  }
  toString(){
    console.log("call tostring");
    return "abc";
  }
}

var x5 = new MyDate()
console.log(true+x5);
console.log("ok,"+x5)

/**
 * 因为 Date() 在“调用 ToPrimitive()”这个阶段的处理顺序是反的，所以它会先调用 x.toString
 */

// 在不确定的情况下，优先将运算数作为数字处理。那么就是默认“+”号是做求和运算的