//宿主对象
/*
window,document,
var div = document.createElement("div");//dom对象
var img =  new Image;
*/

//内置对象
/**
 * 固有对象
 * 固有对象是由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。
 * 原生对象
 * Array,Date,Boolean,Error,Function,Json,Map,Object,Map,Set
 */

//函数对象和构造器对象
/**
 * 函数对象的定义是：具有[[call]]私有字段的对象，构造器对象的定义是：具有私有字段[[construct]]的对象。
 * 任何对象只需要实现[[call]]，它就是一个函数对象，可以去作为函数被调用。而如果它能实现[[construct]]，它就是一个构造器对象
 */

console.log(typeof new Date) //object
console.log(typeof Date())  //string

//在 ES6 之后 => 语法创建的函数仅仅是函数，它们无法被当作构造器使用，见以下代码：
try {
    console.log(new(a => 0))
} catch (e) {
    console.log(e)
}

function f(){
    return 1
}

var v = f();//把f作为函数调用
var o =  new f();//把f作为构造器调用

function cls(){
    this.a = 100;
    return {
        getValue:()=>this.a
    }
}

var o = new cls;
console.log(o.getValue());


var set = new Set();
var objects = [
    eval,
    isFinite,
    isNaN,
    parseFloat,
    parseInt,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    Array,
    Date,
    RegExp,
    Promise,
    Proxy,
    Map,
    WeakMap,
    Set,
    WeakSet,
    Function,
    Boolean,
    String,
    Number,
    Symbol,
    Object,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Atomics,
    JSON,
    Math,
    Reflect];
objects.forEach(o => set.add(o));

for(var i = 0; i < objects.length; i++) {
    var o = objects[i]
    for(var p of Object.getOwnPropertyNames(o)) {
        var d = Object.getOwnPropertyDescriptor(o, p)
        if( (d.value !== null && typeof d.value === "object") || (typeof d.value === "function"))
            if(!set.has(d.value))
                set.add(d.value), objects.push(d.value);
        if( d.get )
            if(!set.has(d.get))
                set.add(d.get), objects.push(d.get);
        if( d.set )
            if(!set.has(d.set))
                set.add(d.set), objects.push(d.set);
    }
}