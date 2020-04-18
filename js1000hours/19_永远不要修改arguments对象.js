function strictMode(x) {
    'use strict';
    arguments[0] = 'something';
    console.log(x,arguments[0]);
    return x===arguments[0]
}

function notStrictMode(x) {
    arguments[0] = 'something';
    console.log(x,arguments[0]);
    return x===arguments[0];
}

console.log(strictMode('hello'));
console.log(notStrictMode('hello'));

var obj = {
    add:function (x,y) {
        return x + y
    }
};

function fixCallMethod(obj,method) {
    var args = [].slice.call(arguments,2);
    return obj[method].apply(obj,args)
}

console.log(fixCallMethod(obj,'add',1,2));

//严格模式修改arguments对象不成功

