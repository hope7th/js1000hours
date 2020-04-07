function test(){
    var a = b = 123;
}
test()
console.log(b)
try {
    console.log(a)
}catch(e){
    console.log(e.message) //a is not defined
}

//因为b,任何变量如果未经声明就赋值，此变量为全局对象所有

//而a则是局部变量，不能再函数外访问
