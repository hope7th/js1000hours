var getName;

console.log(getName)// [Function: getName]
getName();//oaoafly
var getName = function(){
    console.log("-----------")
    console.log("wscat")
}; //函数表达式
getName();//wscat
function getName(){
    console.log("-----------")
    console.log('oaoafly')
} //函数变量提升到了最前面，所以被函数表达式覆盖


function getName(){
    console.log("-----------")
    console.log('oaoafly2')
} //函数变量提升到了最前面，所以被函数表达式覆盖

getName() //wscat

//于谦生了个孩子，先给他一个名字：小孩。后来发现于谦夫妇已经准备了孩子名字：叫于小宝。于是就直接叫于小宝。后来郭德纲发现孩子是自己的，于是改名叫郭小宝。

