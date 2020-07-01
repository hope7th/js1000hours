/**函数式编程
 * 函数式语言根本不考虑数据封装问题，
 * 逻辑之间的数据是由函数界面（也就是函数参数）来传递的，
 * 而函数自身又强调“无副作用”.
 */

/**
 * 
 * 所谓对象，是对数据的封装；
 * 所谓解构，就是从封装的对象中，抽取数据。
 */

/**
 *1: 为所有连续的块添加一个连续的“索引”； 比如数组
 *2:为所有不连续的块添加一个唯一的“名字”。比如对象
 */

 /**
  * 一种称为索引数组（对应于可索引的块），另一种称为关联数组（对应于不可索引的块）。
  * 而究其根本来说，索引数组其实是关联数组的一个特例——被存取的数据所关联的名字就是它的索引。
  * avaScript 中的“对象”，在本质上就是这样的一个关联数组。
  * 同时，所谓的“数组（Array）”——也就是索引数组（Index array）
  * 数组（Array class）是一种对象（Object class）；
  * 对象本质上是关联数组（Associative array）。
  * 于谦老爷子生了8个儿女，组成一个数组，老大，老二，老...老八。郭德纲跑到于老爷子家门前，我要找你家老二。先要找到于谦老爷子。
  * 后来郭德纲总是分不清于老爷子家谁是老几，就说：取个名字吧，后来取了个简单的名字。郭德纲直接喊名字；驴鞭你出来，要和你打架。
  * 于老爷子家也是对象的一种
  */


  /**
   * 计算的本质是求“值”，因此几乎所有的引用类型呢，最终都会将“与它的相关的运算结果”指向“值”
   * “结构”是应用编程的必须，而“解构”是底层计算的必须
   * 于老爷子抽烟喝酒，必须把美国人叫上名字，才能让他们干活。
   * 
   * 模版赋值
   * [a, b] = {a, b}
   * 所谓赋值模板，不过是“变量名字”和“它的值”之间的位置关系的一个“说明”
   * 今天给我买烟和买酒的分别是老大老二烟酒队，老大买烟老二买酒
   * 当赋值模板用作声明（var/let/const）时，上面的“赋值过程”将作为值绑定的初始器；
   * 当该模板用作赋值运算的右操作数时，右操作数将作为“赋值过程”的传入参数
   */


  Object.prototype[Symbol.iterator] = function() {    return Array.prototype[Symbol.iterator].call(Object.values(this));};
  var a = 100, b = 200;
  [a, b] = {a, b}
  var a1,b1;
  [a1,b1] = {b,a}
  console.log(a,b,a1,b1)
//抛出异常 {(intermediate value)(intermediate value)} is not iterable

//生成迭代器
// Object.prototype[Symbol.iterator] = function *(){
//   yield* Object.values(this);
// }

// [a,b] = Object.values({a,b})

// 将数组赋值给对象
var x,y;
({0:x,1:y} = [a,b])
console.log("x="+x,"y="+y)

obj = {...[a,b]}
console.log(obj)

iterator1 = function*(){
  yield *Object.values(this);
}
obj[Symbol.iterator] = iterator1;
arr= [...obj]
console.log(arr)