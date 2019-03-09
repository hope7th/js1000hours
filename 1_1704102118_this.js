function foo(num){
    console.log("foo:"+num);
    this.count++;
    //无意中创建了一个全局变量，他的值是NaN
}
foo.count = 0;

var i ;

for (i=0;i<10;i++){
    if(i>5){
        foo(i)
    }
}

console.log(foo.count)
console.log(this.count)


function foo2(num){
    console.log("foo2:"+num);
    data.count++;
    //无意中创建了一个全局变量，他的值是NaN
}
var data = {
    count:0
}

var i ;

for (i=0;i<10;i++){
    if(i>5){
        foo2(i)
    }
}

console.log(data.count);

//this 用法
//1 在一般函数方法中使用 this 指代全局对象
this.x = 11
function test() {
    console.log("在一般函数方法中使用，指的不是全局对象吗？");
    // this.x=1;
    console.log(this.x)
}
this.x = 11
test();

//作为对象方法调用，this 指代上级对象
function test2() {
    console.log('作为对象方法调用');
    console.log(this.x)
}
var o = {};
o.x = 2;
o.m = test2;
o.m();

//作为构造函数调用，this 指代new 出的对象

function test3() {
    console.log('作为构造函数调用');
    this.x = 3;
}
var o = new test3();
console.log(o.x);
console.log(this.x);

var x = 4
function test4() {
    console.log("apply 调用 ，apply方法作用是改变函数的调用对象，此方法的第一个参数为改变后调用这个函数的对象，this指代第一个参数")
    console.log(this.x);
}
var o = {}
o.x = 1;
o.m = test4();
o.m.apply();
o.m.apply(0);
