function _Date(){
    _this = Object.create(Date.prototype,{_internal_slots});
    Object.setPrototypeOf(this, new.target.prototype);
}

/**
 * Proxy() 类的 construct 句柄与 Reflect.construct() 方法中都需要传递一个称为_newTarget_ 的额外参数的原因
 * 只不过你在构造方法中写super()的时候，是 JavaScript 引擎隐式地帮你传递了这个参数而已
 * 是super()在帮助你传递这个new.target参数
 */

 class MyClass extends Object{}

 /**
  * 你就是没有写“constructor()”方法。
  * 有趣的是，事实上 JavaScript 初始化出来的这个 MyClass 类，
  * （它作为一个函数）就是指向那个“constructor()”方法的，两者是同一个东西。
  * 云鹏没有爹，郭德纲说：观众就是你的父母。给他默认加一个爹
  */

  class MyClass1 extends Object{
      constructor(){
          return {
              "s":"1"
          }
      }
  }
  

  function MyConstructor(){
      return {
          "s":"2"
      }
  }

  console.log(new MyClass1);
  console.log(new MyConstructor);

  class MyClass2 extends null{
      constructor(){
          return Object.create(new.target.prototype)
      }
  }

  console.log(new MyClass2);
  console.log(new (class MyClassEx extends MyClass2{}));

  /**
   * new 关键字的使用，终于揭开面纱了。
   * 
   */

class MyClass3{}
console.log(new MyClass3);
console.log(new (class MyClassEx3 extends MyClass3{}));
//效果是一样的

/***
 * 当然如果父类并不关心子类实例的原型，那么它返回任何的对象都是可以的
 * 岳云鹏当皇上了，对大臣们说，我后代的长子，无论什么货色，都只能皇上。
 */

class MyClass4 {  constructor() { return new Date };}
class MyClassEx4 extends MyClass4 {  
    constructor() { super() };
 // or default  
 foo() {    console.log('check only');  }}
 var x = new MyClassEx4;
 console.log(x instanceof MyClassEx4); // falseconsole.log('foo' in x); // falss
 console.info(x)