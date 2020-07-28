let str = 'nihao';
class MyClass {
    constructor() {
    }
    get prop() {
        return str ;
    }
    set prop(value) {
        str = value;
    }
}

class ParentClass extends MyClass{
    constructor(){
        super();
        this.prop='haha';
    }
}

let parentClass=new ParentClass();

console.log('parentClass.prop',parentClass.prop);
parentClass.prop="heihei";
console.log('parentClass.prop',parentClass.prop);
console.log("str",str);
console.info(parentClass);
console.log(parentClass.hasOwnProperty("prop"));

console.log("-----------------------")
class MyClass1 {
    constructor() {
    }
    get prop() {
        return str ;
    }
    set prop(value) {
        str = value;
    }
}

class ParentClass1 extends MyClass1{
    constructor(){
        super();
        // 当你在这句访问this时，已经找了一轮原型链了
        // 所以这时的prop赋值就已经在调用parent为prop定义的setter了。
        this.prop='haha';
    }
}

let parentClass1=new ParentClass1();

console.log('parentClass1.prop',parentClass1.prop);
parentClass.prop="heihei";
console.log('parentClass1.prop',parentClass1.prop);
console.log("str",str);
console.info(parentClass1);
console.log(parentClass1.hasOwnProperty("prop"));

/**
 * 郭麒麟向郭德纲学习了，相声。郭麒麟每次学相声，都郭德纲教授的传统的方法学，说相声，也是把学到的段子麻利地说出来。
 * 郭麒麟赋值相声的时候，实际已经调用了setter方法了。
 */



