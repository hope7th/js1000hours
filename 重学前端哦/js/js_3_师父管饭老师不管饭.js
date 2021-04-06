var cat = {
    say() {
        console.log("meow~")
    },
    jump() {
        console.log("jump");
    }
}
var tiger = Object.create(cat, {
    say: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function () {
            console.log("roar!")
        }
    }
})
var anotherCat = Object.create(cat);
anotherCat.say();

var anotherTiger = Object.create(tiger);
anotherTiger.say();
console.log("---------------")
//Object.prototype.toString
var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function () {
    return arguments
}();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v)));
console.log("---------------")
var o1 = {[Symbol.toStringTag]:"MyObject"};
console.log(o1)
console.log(o1+"")
//[object MyObject]

var o2 = {"object2":"MyObject"};
console.log(o2)
console.log(o2+"")
//[object Object]
console.log("---------------")
class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.width;
    }
}

var rect1 = new Rectangle(100,100);
console.log(rect1.area);
console.log("-------------")
// 我们通过 get/set 关键字来创建 getter，通过括号和大括号来创建方法，数据型成员最好写在构造器里面。

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name+'make a noise')
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        console.log(this.name + " barks. ")
    }
}
let d1 = new Dog('Mitzie');
d1.speak();
//原型就是师父，古代拜师学医，为师为父，管饭，管你活着。而class是老师，老师不管饭，不管你活着，只是教你东西。


