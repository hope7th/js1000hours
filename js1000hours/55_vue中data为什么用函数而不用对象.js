function MyCompnent(){
    this.data = this.data()
}
MyCompnent.prototype.data = function (){
    return {
        age:12
    }
}

var compnent1 = new MyCompnent();
var compnent2 = new MyCompnent();
compnent1.data.age = 13;
console.log(compnent1)
console.log(compnent2)

// Vue 里面data属性之所以不能写成对象的格式，是因为对象是对地址的引用，而不是独立存在的。如果一个.vue 文件有多个子组件共同接收一个变量的话，改变其中一个子组件内此变量的值，会影响其他组件的这个变量的值。如果写成函数的话，那么他们有一个作用域的概念在里面，相互隔阂，不受影响。
// 问题

//简单说：函数有作用域，也许是创建对象的时候，使用不同内存地址
