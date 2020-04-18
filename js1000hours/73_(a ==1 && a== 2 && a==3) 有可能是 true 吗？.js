var a = {
    i:1,
    toString:function(){
        return a.i++
    }
}

console.log(a==1&&a==2&&a==3)

var b = [1,2,3];
b.join = b.shift;
console.log(b==1&&b==2&&b==3)

var val = 0;
var obj = {}
Object.defineProperty(obj,'c',{
    get:function(){
        return ++val
    }
})
console.log(obj.c==1&&obj.c==2&&obj.c==3)

