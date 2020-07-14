var a  = Infinity;
console.log(a===a-1);//true
var b = -Infinity;
console.log(b===b-1);//true
console.log(100/0);//Infinity;
console.log(-100/0);//-Infinity
console.log(1e1000);//Infinity;
console.log(Number.POSITIVE_INFINITY);//Infinity;
console.log(Number.NEGATIVE_INFINITY);//-Infinity;
console.log("--------------");
console.log(Infinity+Infinity);//Infinity
console.log(Infinity-Infinity);// NaN
console.log(Infinity*Infinity);// Infinity
console.log(Infinity/Infinity);// NaN
console.log(Infinity*0);// NaN
console.log("--------------");

//另一个答案
a = 1e45;
console.log(a);
console.log(a===a-1);//true;
a = 6.22e23;
console.log(a===a-1);
// 在JavaScript里，整数可以被精确表示的范围是从-2 ** 53 + 1到2 ** 53 - 1，即-9007199254740991到9007199254740991。超过这个数值的整数，都不能被精确表示。
// 常量Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER分别对应9007199254740991和-9007199254740991。
a  =  9007199254740986;
for(let i=0;i<10;i++){
    console.log(`${i}: ${a+i}`);
};
/*因为丢失了精度，所以 9007199254740993 和 9007199254740995 不见了。*/


a = Number.MIN_SAFE_INTEGER-1;
console.log(a===a-1);
console.log("------------")

//用valueof给对象赋值
const a1 = {
    times:0,
    valueOf(){
        if(this.times&1){
            return 0;
        }
        this.times+=1;
        return 1;  
    },
}
console.log(a1==a1-1);
//哈哈，好优雅的代码。
 console.log(a1)
 console.log(a1-1)

 //用defineProperty
 var set = 1;
 Object.defineProperty(this,"a2",{
     get:function(){
         return set++
     },
     enumerable:true,
     configurable:true
 })
console.log(this)
console.log(this.a2==this.a2-1)
//nodejs环境只能使用this.a2哈哈。


//在浏览器中，
let count  = 0;
Object.defineProperty(window,"a",{
    get(){
        return ++count;
    }
})


