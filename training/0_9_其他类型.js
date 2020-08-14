var mySymbol = Symbol("my symbol");
var o = new Object;
o[Symbol.iterator] = function(){
    var v = 0 ;
    return {
        next:function(){
            return {value:v++,done:v>10}
        }
    }
};
console.log(o);

//undefined 为定义的值
(function (){
    //undefined不是关键字
    var undefined = 1;
    console.log(undefined)
})();//分号少不了

//null 已经存在的值
(function(){
    //null是关键字
    try {
        // null = 0;
        console.log(null)
    }catch(e){
        console.log("===========")
        console.log(e)
    }
   
})()