var a = []
a[0] = 1
a[2] = "2"
console.log(a[1])//空白单元
delete a[0]//删除后长度不变，只清空
console.log(a)
console.log(a.length)

var b = []
b[0] = 2
b["footbar"] = 1
console.log(b)
console.log(b["footbar"])//数组是对象，可以包含键值对，键值得熟悉缺不计入长度之中

var c = []
c["13"] = 42
console.log(c.length)//js真是奇葩语言，哈哈

//类数组,DOM,Document Object Model,文档对象模型，要改变页面的某个东西，JavaScript 就需要获得对 HTML 文档中所有元素进行访问的入口。这个入口，连同对 HTML 元素进行添加、移动、改变或移除的方法和属性，都是通过文档对象模型来获得的（DOM）。
function foo(){
    var arr = Array.prototype.slice.call(arguments)
    arr.push("bam"),
    console.log(arr)
}

foo("bar","baz");

//字符串和数组
var a = "foo"
var b = ["f","o","o"]
//借用数组的非变更方法来处理字符串
var c = Array.prototype.join.call(a,"-")
var b = Array.prototype.map.call(a,function(v){
    return v.toUpperCase()+".";
}).join(" ")

console.log(b)
console.log(c)

//split 生成的数组

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
console.log(words);

//浅复制
var nums = []
for (var i=0;i<100;++i){
    nums[i] = i+1;
}
var samenums = nums;
nums[0] = 100;
console.log(samenums[0]);

//深复制
function copy(arr1,arr2) {
    for (var i=0;i<arr1.length;++i){
        arr2[i] = arr1[i]
    }
}

//concat

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmpDept.concat(cisDept)
console.log(itDiv);
//push
var nums = [1,2,3,4,5];
console.log(nums);
nums.push(6);
console.log(nums);
nums[nums.length]=7;
console.log(nums);
nums.pop();
console.log(nums);
//shift 删除数组中的第一个元素
var nums = [9,1,2,3,4,5];
var first = nums.shift();
console.log(nums);
console.log(first);
//splice 从数组中间添加删除元素

var nums = [1,2,3,7,8,9];
var newElement = [4,5,6];
nums.splice(3,0,newElement);
console.log(nums)
nums.splice(3,2,4,5,6);
console.log(nums);

//排序
var nums = [1,2,3,4,5];
console.log(nums.reverse());

var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
console.log(names);

function compare(num1,num2) {
    return num2 - num1
    //从小到大和从大到小的排序方式不同
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums);

//迭代器 forEach
function square(num) {
    console.log(num,num*num);
}

var nums = [1,2,3,4,5,6,7,8,9];
nums.forEach(square);

//every 所有元素均返回true才返回true
function isEven(num) {
    return num%2==0;
}
var nums = [2,3,4,6,8,10];
var even = nums.every(isEven);
if (even){
    console.log("all numbers are even")
} else {
    console.log("not all numbers are even")
}


//some 只要有一个元素使得改函数返回true

var nums = [1,2,3,4,5,6,7];
var someEven = nums.some(isEven);
if(someEven){
    console.log("some numbers are even")
}else {
    console.log("no numbers are even")
}

nums = [1,3,5,7];
var someEven = nums.some(isEven);
if(someEven){
    console.log("some numbers are even")
}else {
    console.log("no numbers are even")
}

//reduce 接收一个函数，返回一个值
function add(runningTotal,currentValue) {
    return runningTotal + currentValue
}

var nums = [1,2,3,4,5,6,7,8,9];
var sum =  nums.reduce(add);
console.log(sum);

//reduce 将数组中的元素连接成一个长的字符串

function concat(accumulayeString,item) {
    return accumulayeString + item
}

var words = ["the ","quick ","brown ","fox "];
var sentence = words.reduce(concat);
console.log(sentence);

//reduceRigt从右到左执行
var sentence2 = words.reduceRight(concat);
console.log(sentence2);

//map() and filter
function curve(grade) {
    return grade+=5;
}
//map ,对每个元素使用某个函数，map()返回一个新的数组
var grades = [77,65,81,92,83];
var newgrades = grades.map(curve);
console.log(newgrades);
function first1(word) {
    return word[0];
}
var words = ["for","your","information"];
var acronm = words.map(first1);
console.log(acronm.join(""));
console.log(acronm.toString());

//filter()根据过滤函数，返回一个布尔型参数的数组，very esay
 function isEven(num) {
     return num%2==0;
 }

 function isOdd(num) {
     return num %2 !=0;
 }

 var nums = [];
 for (var i=0;i<20;++i){
     nums[i] = i+1
 }
 var evens = nums.filter(isEven);
 console.log("Even numbers:");
 console.log(evens);
 var odds = nums.filter(isOdd);
 console.log("Odd numbers");
 console.log(odds);

 function passing(num) {
     return num>=60
 }
 var grades = [];
 for (var i=0;i<20;++i){
     grades[i] = Math.floor(Math.random()*101);
 }
 var passGrades = grades.filter(passing);
 console.log("all grades:");
 console.log(grades);
 console.log("Pass grades");
 console.log(passGrades);

