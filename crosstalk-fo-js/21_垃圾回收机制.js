//JavaScript 中内存管理的主要概念是可达性。
// 简单地说，“可达性” 值就是那些以某种方式可访问或可用的值，它们被保证存储在内存中。

//1. 有一组基本的固有可达值，由于显而易见的原因无法删除。例如:
//(1) 本地函数的局部变量和参数
//(2)当前嵌套调用链上的其他函数的变量和参数
//(3)全局变量
//(4)还有一些其他的，内部的

//2. 如果引用或引用链可以从根访问任何其他值，则认为该值是可访问的。


//JavaScript 引擎中有一个后台进程称为垃圾回收器，它监视所有对象，并删除那些不可访问的对象。


let user = {
    name:'jorn'
}

//局变量“user”引用对象 {name:“John”} (为了简洁起见，我们将其命名为John)。John 的 “name” 属性存储一个基本类型，因此它被绘制在对象中。

user = null

//现在 John 变成不可达的状态，没有办法访问它，没有对它的引用。垃圾回收器将丢弃 John 数据并释放内存

user = {
    name:'john'
};
let admin = user;
user = null;
//该对象仍然可以通过 admin 全局变量访问，所以它在内存中。如果我们也覆盖admin，那么它可以被释放。
console.log(admin)
admin = null;

function marry(man,woman) {
    woman.husban = man;
    man.wife = woman;

    return {
        father:man,
        mother:woman
    }
}

let family = marry({
    nam:'john'
},{
    name:'Ann'
})

delete family.father;
delete family.mother.husban;
console.log(family)//{ mother: { name: 'Ann' } }
delete family.mother//
console.log(family)//{}



//内部算法
//(1)第一步标记根
//(2)然后标记他们的引用以及子孙代的引用:
//(3)现在进程中不能访问的对象被认为是不可访问的，将被删除:
//
// 分代回收——对象分为两组:“新对象”和“旧对象”。许多对象出现，完成它们的工作并迅速结 ，它们很快就会被清理干净。那些活得足够久的对象，会变“老”，并且很少接受检查。
// 增量回收——如果有很多对象，并且我们试图一次遍历并标记整个对象集，那么可能会花费一些时间，并在执行中会有一定的延迟。因此，引擎试图将垃圾回收分解为多个部分。然后，各个部分分别执行。这需要额外的标记来跟踪变化，这样有很多微小的延迟，而不是很大的延迟。
// 空闲时间收集——垃圾回收器只在 CPU 空闲时运行，以减少对执行的可能影响。
