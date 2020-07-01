//this是作为new运算所构造出来的那个实例来使用的

//原型继承到类继承

function Device(){
    this.id = 0;
}

function Car(){
    this.name = "Car";
    this.color = "Red";
    // this.id = "1";
}

Car.prototype = new Device();
var x = new Car();
console.info(x);
console.log(x.id)
console.log(x instanceof Device)
console.log(x instanceof Car)
console.info(x.prototype === Car.prototype)

// console.log(x[[Prototype]][[Prototype]]==Device.prototype)


//郭小宝既是于谦的实例。也是于老爷子的实例，原型继承既是指定祖先。
/**
 * 判断郭小宝是不是于谦的儿子，首先看DNA，取出郭小宝的DNA,x.[[Prototype]]和于谦的DNACar.prototype对比，
 * 
 */


// 在instanceof运算中，x instanceof AClass表达式的右侧是一个类名（对于之前的例子来说，它指向构造器 Car），但实际上 JavaScript 是使用AClass.prototype来做比对，对于“Car() 构造器”来说，就是“Car.prototype”。但是，如果上一个例子需要检查的是x instanceof Device，也就是“Device.prototype”，那么这二者显然是不等值的。所以，instanceof运算会再次取“x.[[Prototype] [[Prototype]]”这个内部原型，也就是顺着原型链向上查找：

class aclass{

}

// 类只能用 new 运算来创建，而不能使用“()”来做函数调用。例如：

new aclass();

//aclass() //Class constructor aclass cannot be invoked without 'new'


// 在 ECMAScript 6 之后 JavaScript 内部是明确区分方法与函数的：不能对方法做 new 运算。
  
function obj(){
    function foo(){

    }
}

//new obj.foo() //obj.foo is not a constructor

console.info(new obj())

/*在 ECMAScript 6 之后，函数可以简单地分为三个大类：
类：只可以做 new 运算；方法：只可以做调用“( )”运算；
一般函数：（除部分函数有特殊限制外，）同时可以做 new 和调用运算。
其中，典型的“方法”在内部声明时，
有三个主要特征：具有一个名为“主对象[[HomeObject]]”的内部槽；
没有名为“构造器[[Construct]]”的内部槽；
没有名为“prototype”的属性。*/

/**
 * 以前德云社教相声，都是师父教徒弟，但是，面对公式相声的冲击，决定引入上课的方式，class。专门来大规模生产相声人才。
 * 方法和一般函数，方法是郭德纲自己拥有的东西，不能传承的。
 */

f = new Function;
console.info(f instanceof Function)
console.info(f())
console.info("----------f()")

var MyFunction = function(){};
MyFunction.prototype = new Function;
f = new  MyFunction();
console.info(f)
// f() //f is not a function,

/*至于原因，你可能也已经知道了：JavaScript 所谓的函数，
其实是“一个有[[Call]]内部槽的对象”。
而Function()作为 JavaScript 原生的函数构造器，
它能够在创建的对象（例如this）中添加这个内部槽，
而当使用上面的继承逻辑时，
用户代码（例如MyFunction()）就只是创建了一个普通的对象，
因为用户代码没有能力操作 JavaScript 引擎层面才支持的那些“内部槽”
*/

console.info("--------f2")
 function MyFunction2(){
     this.f2 = true;
 }
 var f2 = new MyFunction2
 console.info(f2)
 console.info(f2.f2)

 console.info("--------")

 class MyFunction3 extends Function { }
 f = new MyFunction3
 console.info(f()) //undefined

 //好的评论摘录

//  这个this实例的确是由父类或祖先类创建的。但它不是“继承”来的，因为“继承”这个说法严格来说在JavaScript中就是原型继承，而这个this不是靠原型继承来“传递到”子类的。

// 在super()调用之前，当前函数——例如子类的构造器——无法访问this，是它的作用域里面没有this这个名字（因为还没有被创建出来嘛）。而super()调用之后，JavaScript引擎会把this“动态地添加到”作用域中，于是this就能访问了。