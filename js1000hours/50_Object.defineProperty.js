var obj ={
    test:'hello'
};
var obj = {}
Object.defineProperty(obj,"k",{
    value:"hello",
    writable:false,//可以被重写
    enumerable:true, //可被枚举
    configurable:true //重新修改特性
});
console.log(obj.k);
obj.k="jj"
console.log(obj.k)

for (var attr in  obj){
    console.log(attr)
}