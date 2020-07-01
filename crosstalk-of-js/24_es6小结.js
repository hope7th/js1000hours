function aa() {
    var flag = false;
    if (flag){
        var test = 'hello man'
    }else {
        console.log(test)
    }
}
//注，变量的提升，var 关键字声明的变量，函数内部会提升在函数最顶部，不在函数内部，提升在全局作用域最顶部

//let 和const都是块级作用域，{}，内部，不会被提升到函数最顶部。会放在TDZ(暂时性死区)

{
    let test = 'hello man'
    const student = {name:'cc'}
    student.name = 'yy';
    //student = {name:'gg'} 报错，变量成员可以修改，但是地址不可以修改

}
//面试题
var funcs = []
for (var i=0;i<10;i++){
    funcs.push(function () {
        console.log(i)
    })
}
funcs.forEach(function (func) {
   func()
});
//立即调用函数
var funcs = []
for (var i=0;i<10;i++){
    funcs.push(
        (function (value) {
        return function () {
            console.log(value)
        }
    })(i)
    )
}
funcs.forEach(function (func) {
    func()
});
const funcss = []
for (let i=10;i<20;i++){
    funcss.push(function () {
        console.log(i)
    })
}
funcss.forEach(func=>func());

//模板字符串
var name = 'lux';
console.log('hello'+name);
const names = 'luxx';
console.log(`hello ${names}`);//左上角，esc下面的那个符号

//字符串拼接
var msg = "Hi \
man!\
"
console.log(msg);

const template = `<div>
<span>hello world</span>
<div`
console.log(template)

const str = 'haha!'
console.log(str.includes('h'));
console.log(str.repeat(3));
console.log(str.startsWith('hello'));
console.log(str.endsWith('!'));

setTimeout(()=>{
    const now = new Date();
    const hours = now.getHours().toString();
    const minutes = now.getMinutes().toString();
    const seconds = now.getSeconds().toString()
    console.log(`${hours.padStart(2,0)}:${minutes.padStart(2,0)}:${seconds.padStart(2,0)}`)
},1000);

//模拟一个模板字符串的实现
//这个应该是理解有误
let address = '北京市海淀区';
let name2 = 'lala';
let str2 = `${name2}在${address}上班`;
function myTemplate(str2) {
    return str2
}
console.log(myTemplate(str2))

const name3 = 'cc'
const gender = 'male'
const hobby = 'basketball'
// 实现tag最终输出 '姓名：**cc**，性别：**male**，爱好：**basketball**'
function tag(strings) {
    // do it
}
const str3 = tag`姓名：${name3}，性别：${gender}，爱好：${hobby}`
console.log(str3);// '姓名：**cc**，性别：**male**，爱好：**basketball**'

//函数默认参数
//es5
function action(num) {
    num = num||200
    return num
}
//es6,以便在参数没有被传递进去时使用。
function action2(num=200) {
    console.log(num)
}
action(0);//0
action()//200
action(300)//300

var numArr = [1,2,3];
numArr =numArr.map(x=>x+1);
console.log(numArr);

const  calculate = (x,y,z)=>{
    x = typeof x!='number'?0:x;
    y = typeof y!='number'?0:y;
    return x % y === z
};

//拓展对象的功能
function people(name,age) {
    return {
        name:name,
        age:age
    }
}

function people2(name,age) {
    return {
        name,
        age
    }
}

const people3 = {
    name:'luxpeople3',
    getName:function () {
        console.log(this.name)
    }
};
const people4 = {
    name:'luxpeople4',
    getName(){
        console.log(this.name)
    }
}
people3.getName();
people4.getName();

//浅复制.Object.assign()
const objA = {name:'cc',age:'18'};
const objB = {address:'beijing'};
const objC = {}
const obj = Object.assign(objC,objA,objB);

console.log(objA);
console.log(objB);
console.log(objC);
console.log(obj)






