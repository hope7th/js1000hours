console.log("更新表达式 UpdateExpression--------") 
var a = 0;
--a;
++a;
a--;
a++;
console.log("一元运算表达式 UnaryExpression-------")
delete a.b;
void a;
typeof a;
-a;
~a;
!a;
function a1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10000)
        },2000)
    })
}
async function ss(){
    let result = await a1();
    console.log(result)
}
ss();//100000
console.log("乘方表达式 ExponentiationExpression-------------")
//** 运算是右结合的
var i = 1;
console.log(++i **30);
2 ** 30;
// -2 **30;
console.log(4**3**2)
console.log("移位表达式 ShiftExpression-------")
console.log(-1>>>1)