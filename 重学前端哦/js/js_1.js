var o = new Object;
o[Symbol.iterator] = function () {
    var v = 0;
    return {
        next: function () {
            return {
                value: v++,
                done: v > 10
            }
        }
    }
}
console.log(o)
for(var v of o){
    console.log(v)
}


//运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。类型转换
//原型上添加方法
Symbol.prototype.hello = ()=>console.log("hello");
var a = Symbol("a");
console.log(a)
console.log(typeof a);
a.hello();

Number.prototype.hello = ()=>console.log("hello number");
var n = Number(5.66);
console.log(n);
console.log(typeof n);
n.hello();

console.log("undefined 和 null的区别")
//undefined 和null 
var s;
console.log(s);//undefined
console.log(typeof s)//undefined
var ss = null;
console.log(ss);//null
console.log(typeof ss);//object

/**
 * null是已定义的空对象
 * undefined是未定义
 * 万物产自虚空，虚空有虚实之分，实物即对象，虚物不存于世，存于人的想想里
 * undefined是为定义前的虚物和实物，null是空实物，空对象。
 */
console.log("------end--------")
console.log("abc".charAt(1)); //a

/**
 * Number、String 和 Boolean，三个构造器是两用的，
 * 当跟 new 搭配时，它们产生对象，当直接调用时，它们表示强制类型转换。
 */

 /**
  * JavaScript 中的几个基本类型，都在对象类型中有一个“亲戚”。它们是：Number；String；Boolean；Symbol
  */

  var three = 3;
  var newThree = new  Number(3);
  console.log(three);
  console.log(typeof three);
  console.log(newThree);
  console.log(typeof newThree);
  console.log(Number(newThree)) //强制类型转换为3

//Number、String 和 Boolean，三个构造器是两用的，当跟 new 搭配时，它们产生对象，当直接调用时，它们表示强制类型转换。
console.log(parseInt(0xFF))
console.log(parseInt(1e3))


/**
 * 所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。
 */
//装箱转换
var symbolObject = (function(){return this;}).call(Symbol("a"));
console.log(typeof symbolObject);
console.log(symbolObject instanceof Symbol);
console.log(symbolObject.constructor == Symbol); 

//symbolObject2
var symbolObject2 = Object(Symbol("2"));
console.log(typeof symbolObject2);
console.log(symbolObject2 instanceof Symbol);
console.log(symbolObject.constructor==Symbol);



var symbolObject1 = Object(Symbol("a"));
console.log(Object.prototype.toString.call(symbolObject1)); //[object Symbol]
/*
每一类装箱对象皆有私有的 Class 属性，这些属性可以用 Object.prototype.toString 获取：
在 JavaScript 中，没有任何方法可以更改私有的 Class 属性，
因此 Object.prototype.toString 是可以准确识别对象对应的基本类型的方法，
它比 instanceof 更加准确。
*/

console.log("-------对象拆箱--------")
 //拆箱转换
 var o = {
     valueOf:()=>{console.log("valueOf");return{}},
     toString:()=>{console.log("toString");return{}}
 }
 try{
    o*2;
 }catch(e){
    console.log(e)
 }
 console.log("------拆箱1end--------")
try{
    String(o);
}catch(e){
    console.log(e)
}
console.log("------拆箱2end--------")
var o1 = {
    valueOf:()=>{console.log("valueOf"); return {}},
    toString:()=>{console.log("toString");return {}}
}

o1[Symbol.toPrimitive] = () =>{console.log("toPromitive");return "hello"};
console.log(o1+"")
console.log("------拆箱3end--------")