// “数据代理”是在对象上产生一个新的属性，而“数据劫持”则是对对象已存在的属性进行重新定义。
// 数据代理
const obj = {
    a:{
        b:{
            c:{}
        }
    }
};
Object.defineProperty(obj,'c',{
    get(){
        return obj.a.b.c
    },
    set(v) {
        obj.a.b.c = v;
    }
})
obj.a.b.c = 'sss';
console.log(obj.c);
obj.c = "jjj";
console.log(obj.a.b.c)
// 数据劫持
const obj0 = {
    a:"xxx",
    b:'yyy'
};
Object.defineProperty(obj0,'a',{
  get() {
  },
    set(v) {
    }
});

console.log(obj0.a)
obj0.a = 'zzzz'
console.log(obj0.a)
// 利用Object.defineProperty()把数据劫持，但是什么都干
const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42