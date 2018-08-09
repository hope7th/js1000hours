//Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
var obj = new Proxy({},{
    get:function (target,key,receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target,key,receiver)
    },
    set:function (target,key,value,receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target,key,value,receiver)
    }
});

//字符串模板相对简单易懂些。ES6中允许使用反引号 ` 来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量${vraible}。

obj.count = 1;
++obj.count;

var proxy = new Proxy({},//目标对象
    {
    get:function (target,property) {
        return 35;
    }//配置对象
});

/*Proxy接受两个参数。第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有Proxy的介入，
操作原来要访问的就是这个对象；第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，
该函数将拦截对应的操作。比如，上面代码中，配置对象有一个get方法，用来拦截对目标对象属性的访问请求。
get方法的两个参数分别是目标对象和所要访问的属性。可以看到，由于拦截函数总是返回35，所以访问任何属性都得到35。
 */

console.log(proxy.time);
console.log(proxy.title);
console.log(proxy.name);

var target = {};
var handler = {};
var proxy = new Proxy(target,handler);
proxy.a = 'b';
console.log(target.a);
/*
要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。
如果handler没有设置任何拦截，那就等同于直接通向原对象。
*/
var proxy = new Proxy({},{
    get:function (target,property) {
        return 35
    }
});

obj = Object.create(proxy);
console.log(obj.time);

//Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
//对于原型链和原型对象的学习还需加强 