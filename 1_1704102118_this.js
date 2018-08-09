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

console.log(data.count)
