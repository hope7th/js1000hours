//转载https://juejin.im/post/5ceb6abce51d454fd8057b08?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com
// 1.data是 Vue 实例上的一个属性。2. 对象是对于内存地址的引用。3. 函数有自己的作用域空间
// 第二点，JS 的数据类型分为基本类型和引用类型，
// 基本类型存储在栈内存中，引用类型存储在堆内存中，并且引用类型指向的是栈内存中的堆区地址。
console.log("基本数据类型赋值--")
//基本数据类型赋值
var a = 10;
var b = 10;
var c = a;
console.log(a===b);
a++;
console.log(a);
console.log(c);
console.log(a===b)

//然后用 a 来初始化 c，那么 c 的值也是 10。但 c 中的 10 与 a 中的是完全独立的，

console.log("引用类型赋值--")
//引用类型赋值
var a = {};
var b = {};
var c = a;
console.log(a===b)
console.log(a===c)
a.name = "marry"
a.say = ()=> console.log("'Hi Marry!'")
console.log(c.name); // 'Marry'
console.log(c.say()); // 'Hi Marry!' undefined(无返回值的时候返回undefinde)
// b两个空对象，然后把 a 赋值给 c。因为对象是对栈内存的地址的引用，所以不同的对象的地址是不同的，所以他们不是全等的。接着给 a 新增加属性和方法，c 同样可以拥有此属性和方法，主要是因为 c 和 a 指向堆内存中的同一个地址。首先声明了a、
function MyCompnent () {

}
MyCompnent.prototype.data = {
  age:12
}

var jackma = new MyCompnent();
var ponyMa = new MyCompnent();
console.info(MyCompnent.prototype)
console.info(jackma)
console.info(ponyMa)
console.log(jackma.data.age == ponyMa.data.age)
jackma.data.age = 13;
console.info(MyCompnent.prototype)//原型改变了
console.log('JackMa ' + jackma.data.age + '岁；' + 'PonyMa ' + ponyMa.data.age + '岁');

// data 为函数的示例代码

function MyCompnent1 () {
  this.data = this.data();
}
MyCompnent1.prototype.data = function () {
  return {
    age:12
  }
}

var JackMa = new MyCompnent1();
var PonyMa = new MyCompnent1();
console.info(MyCompnent1.prototype)
console.info(JackMa)
console.info(PonyMa)
console.log(JackMa.data.age = PonyMa.data.age);
JackMa.data.age=13;
console.info(MyCompnent1.prototype)//原型未改变
console.log('JackMa ' + JackMa.data.age + '岁；' + 'PonyMa ' + PonyMa.data.age + '岁');
//Vue 里面data属性之所以不能写成对象的格式，是因为对象是对地址的引用，而不是独立存在的。如果一个.vue 文件有多个子组件共同接收一个变量的话，改变其中一个子组件内此变量的值，会影响其他组件的这个变量的值。如果写成函数的话，那么他们有一个作用域的概念在里面，相互隔阂，不受影响。
