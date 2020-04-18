var x=y=100;
console.log(x);
console.log(y);

// 这行代码可能是 JavaScript 中最复杂和最容易错用的表达式了。

// JavaScript 中一共只有六条声明用的语句

/* let  x …声明变量 x。不可在赋值之前读。
const  x …声明常量 x。不可写。
var  x …声明变量 x。在赋值之前可读取到 undefined 值。
function  x …声明变量 x。该变量指向一个函数。
class  x …声明变量 x。该变量指向一个类（该类的作用域内部是处理严格模式的）。
import …导入标识符并作为常量（可以有多种声明标识符的模式和方法）。

都意味着 JavaScript 将可以通过“静态”语法分析发现那些声明的标识符；
标识符对应的变量 / 常量“一定”会在用户代码执行前就已经被创建在作用域中。
*/


// 变量提升

console.log(x1); 
// undefined
var x1 = 100;
console.log(x1); // 100

var y2 = "outer";
function f(){
    console.log(y); // undefined 
    try{
        console.log(x); // 不是因为它不存在，而是因为这个标识符被拒绝访问了。
        let x = 100;
    }catch(e){
        console.info(e);
    }
   
    var y = 100;
}
f();

// 正是由于var y所声明的那个标识符在函数 f() 创建（它自己的闭包）时就已经存在，所以才阻止了console.log(y)访问全局环境中的y。类似的，let x所声明的那个x其实也已经存在 f() 函数的上下文环境中。访问它之所以会抛出异常（Exception），不是因为它不存在，而是因为这个标识符被拒绝访问了。


/*
在 ECMAScript 6 之后出现的let/const变量在“声明（和创建）一个标识符”这件事上，与var并没有什么不同，
只是 JavaScript 拒绝访问还没有绑定值的let/const标识符而已。
*／


/* 
回到 ECMAScript 6 之前：JavaScript 是允许访问还没有绑定值的var所声明的标识符的。这种标识符后来统一约定称为“变量声明（varDelcs）”，
而“let/const”则称为“词法声明（lexicalDecls）”。
JavaScript 环境在创建一个“变量名（varName in varDecls）”后，会为它初始化绑定一个 undefined 值，
而”词法名字（lexicalNames）”在创建之后就没有这项待遇，所以它们在缺省情况下就是“还没有绑定值”的标识符。
*／
／* NOTE：6 种声明语句中的函数是按 varDecls 的规则声明的；类的内部是处于严格模中，它的名字是按 let 来处理的，而 import 导入的名字则是按 const 的规则来处理的。
所以，所有的声明本质上只有三种处理模式：var 变量声明、let 变量声明和 const 常量声明。*/

/*  javascript的赋值
lRef = rValue
右操作数（的值）赋给左操作数（的引用）
一个赋值表达式的左边和右边其实“都是”表达式！
*/

/*
向一个不存在的变量赋值接下来我要给你介绍的是从 JavaScript 1.0 开始就遗留下来的一个巨坑，
也就是所谓的“变量泄漏”问题。
这在早期的 JavaScript 中的确是一个好用的特性：如果你向一个不存在的变量名赋值，那么 JavaScript 会在全局范围内创建它。
ECMAScript5 开始的严格模式就禁止了这种特性，试图避免用户将变量泄露到全局环境。 
*/

/*
JavaScript 引擎将全局的一些缺省对象、运行期环境的原生对象等东西都初始化在这个全局对象的属性中，
并使用这个对象创建了一个称为“全局对象闭包”的东西，
从而得到了 JavaScript 的全局环境。
 */


 /*
 为了兼容旧的 JavaScript 语言设计，
 现在的 JavaScript 环境仍然是通过将全局对象初始化为这样的一个全局闭包来实现的。
 但是为了得到一个“尽可能”与其它变量环境相似的声明效果（varDecls），
 ECMAScript 规定在这个全局对象之外再维护一个变量名列表（varNames），
 所有在静态语法分析期或在 eval() 中使用var声明的变量名就被放在这个列表中。
 然后约定，这个变量名列表中的变量是“直接声明的变量”，不能使用delete删除。
  */

  var a = 100;
  x3 = 200;
  // `a`不能删除, `x`可以被删除
  console.log("-------------");
  console.log(delete a);
  console.info(Object.getOwnPropertyDescriptor(global, 'a'));
  console.info(Object.getOwnPropertyDescriptor(global, 'x'));
  console.log( delete x3);
  console.log(a);
  try {
    console.log(x3);
  }catch(e){
      console.info(e) //x3 is not defined
  }

//  并且当var声明发生在 eval() 中的时候，这一特性又还有所不同，例如：

//  这种情况下使用var声明的变量名尽管也会添加到 varNames 列表，但它也可以从 varNames 中移除（这是唯一一种能从 varNames 中移除项的特例，而 lexicalNames 中的项是不可移除的）。
eval("var b = 300");
console.log(Object.getOwnPropertyDescriptor(global, 'b'))
console.log(b)
delete b;
try {
    console.log(b)
}catch(e){
    console.info(e) // b is not define
}

/* 而一个赋值表达式操作的本身也是有“结果（Result）”的，它是右操作数的值。
注意，这里是“值”而非“引用”，例如下面的测试中的a将是一个函数，
而不是带着“this 对象”信息的方法： */

var obj = {f:function(){return this === obj}}
console.log((a=obj.f)())
 