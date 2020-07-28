console.log(void 0);
console.log(void (0));
console.log(void "hello");
console.log(void (new Date()));
console.log("------------")
console.log(undefined);
var undefined  = "new value";
console.log(undefined);
(function(){
    var undefined = 10;
    console.log(undefined) //10 --chrome
})();
(function(){
    undefined = 10;
    console.log(undefined);
    console.log(undefined=="undefined")
})()

/**
 * undefined 在 ES5 中已经是全局对象的一个只读（read-only）属性了，它不能被重写。
 * 但是在局部作用域中，还是可以被重写的。
 */
console.log("--------------");
var s;
(function(){var undefined = "ss";console.log(s==undefined)})()
console.log(s==undefined)// 在chrome环境下是true.
/**
 * 李寻欢的女儿小小红在峨眉山学习武艺，郭襄不能直呼李寻欢的名字，就在江湖上在叫李大侠。
 * 后来李秋雨把他的女儿李秋水和李沧海送到峨眉山，
 * 郭襄就不能叫李寻欢李大侠了，也不愿直呼其名，而是叫他小李探花。
 */