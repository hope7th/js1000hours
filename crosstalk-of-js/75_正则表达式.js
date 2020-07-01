// 正则表达式（regex）是定义搜索模式的字符序列。
const regex = /dog/;
// const regex = new RegExp("dog")

console.log(regex.test('dog'));//true
console.log(regex.test('hot-dog'));//true
/dog/.test("do games"); //false



//(点.)可匹配任何单个字符

const regex1 = /.og/;
console.log(regex.test("fog")); //true
console.log(regex.test("dog")); //true

//反斜杠，转义字符，特殊字符切换为普通字符。

const regex2 = /dog\./
console.log(regex2.test("dog."));//true;
console.log(regex2.test("dog1"));//false;

//[] 该字符可能是中括号中的任何字符。
console.log(/[dfl]og/.test("dog"));//true;
console.log(/[dfl]og/.test("fog"));//true;
console.log(/[dfl]og/.test("log"));//true;
console.log(/[A-z]/.test("a"));//true;


//^否定字符集
console.log(/[^df]og/.test('dog'));
console.log(/[^df]og/.test('fog'));
console.log(/[^df]og/.test('log'));

//{} 出现次数
function isPhoneNumber(number){
    return /\+[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{3}/.test(number)
}

console.log(isPhoneNumber("+12 123 123 123"));
//{x}  完全匹配x次出现
//{x,} 至少匹配x次
//{x,y} 至少匹配x次且不超过y次
// *匹配0次或更多次，{0,}
// /.*/ 可以匹配任意数量的字符。

//i：忽略大小写
console.log("忽略大小写")
console.log(/dog/i.test("d0g"));

//g:全局匹配




