// 1: 全局替换
var example = "potato potato";
console.log(example.replace(/pot/,'tom'))
console.log(example.replace(/pot/g,'tom'))
// 淘集生意失败，换掉第一人或者全部换掉公司高级管理人员，董事会拿着一张g卡迟疑中....


//2：唯一值数组
var entries = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 4, 2, 1];
var unique_entries = [...new Set(entries)]
console.log(unique_entries);


//3:数字转化字符串
var converted_number = 5 + "";
console.log(converted_number)
console.log(typeof converted_number)

//4:字符串转数字
var the_string = "123"
console.log(+the_string)
the_string = "hello";
console.log(+the_string)

//5:打乱数组元素
var my_list = [1,2,3,4,5,6,7,8,9];
console.log(my_list.sort(function(){
    return Math.random()-0.5
}))

//6:二维数组碾平
var entries = [1,[2,5],[6,7],9]
var flat_entries = [].concat(...entries)
console.log(flat_entries)

//7:语法缩短
// if(available){
//     addToCart()
// }
// available && addToCart()

//8 动态分配属性
var dynamic = "flavour"
var item = {
    name:"Coke",
    [dynamic]:"Cherry"
}
dynamic = "lastname";
console.log(item)

//9:数组长度调整
var entries = [1,2,3,4,5,6,7];
console.log(entries.length)
entries.length = 4;
console.log(entries.length);
console.log(entries);



