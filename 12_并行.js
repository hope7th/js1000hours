var a,b;
function foo(x){
    a = x * 2;
    if(a && b){
        baz();
    }
}

function bar(y){
    b = y * 2;
    if(a && b){
        baz();
    }
}

function baz(){
    console.log(a + b);
}

var xmlhttp;
foo(1);
bar(2);
// if(window.XMLHttpRequest){
//     xmlhttp = new XMLHttpRequest()
// }else{
//     xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
// }

// xmlhttp.open("GET","http://www.baidu.com",true);
// xmlhttp.send();
// xmlhttp.onreadystatechange=function()
// 	{
// 		bar()
// 	}

