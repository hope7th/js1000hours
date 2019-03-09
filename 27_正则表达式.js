// https://regexper.com/ 正则表达式网站

//find ./ -name *.txt 当前目录下寻找所有.txt的文件
///bis/b /b表示单词边界 找到文字中所有is单词的内容
// http:\/\/.*\.jpg 找到文件中所有包含 反斜杠转义字符
// http:(\/\/.*\.jpg) 替换框里写$1 把http
//^\d{4}[/-]\d{2}[/-]\d{2}$ 日期匹配
var reg = /\bis\b/g;
var string1 = 'He is a boy,where is she';
string1 = string1.replace(reg,'IS');
console.log(string1);
var newReg = new RegExp('\\bIS\\b','g');
string1 = string1.replace(newReg,'is');
console.log(string1);

//g:global 全文搜索，不添加只搜索到第一个为止
//i:ignore case 忽略大小写，默认大小写敏感


var string2 = 'He is a boy,IS he?';
console.log(string2.replace(/\bis\b/gi,'0')); //正则表达式里没有用''

//在JS中表达式必须写在一行，表达式中的空白是至关重要的。

//^字符表示字符串的开始
//(?:([A-Za-z]+):)?
//(?:...)表示一个非捕获型分组
//后缀？表示这个分组是可选的，表示重复0次或1次
//([A-Za-z]+): 表示一个捕获型分组
//[...]表示一个字符类，A-Za-z包含26个大写字母和26个小写字母 +表示一次或者多次,后面的:将按字面进行匹配

//(\/{0,3})
// \/ 表示应该被匹配的斜杠 / 用反斜杠\转义，他就不会被解释为结束符,{0，3}表示他将匹配0次或者 1到3次之间

//([0-9.\-A-Za-z]+)
// +表示1个或者多个数字,字母，或点(.)，或横杠(-)组成，横杠(-)被转义为 \- 以防止与范围连字符混淆

//(?::(\d+))?
//可选因子匹配，它由一个:加上 1个或多个数字组成的序列 \d表示数字字符

// (?:\/([^?#]*))?
//可选的分组，以一个 斜杠（/）开始,[^?#]这个类包含除了?和#之外的所有字符，

//(?:\?([^#]*))?
//可选分组， 以？开始，包括0个或者多个非#字符

//(?:#(.*))?
//最后一个分组是由#开始的，点（.）将匹配除了行结束符以外的所有字符

//$ 表示这个字符串结束
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment";
var result = parse_url.exec(url);
console.info(result);//

var names = ['url','scheme','slash','host','port','path','query','hase'];
var blanks = '    ';
var i;
for(i=0;i<names.length;i++){
    console.log(names[i]+":"+blanks.substring(names[i].length),result[i])
}

var parme_number = /^-?\d+(?:\.\d*)?(?:e[+\-]\d+)?$\i
var test = function (num) {
    console.log(parme_number.test(num))
}

//如果省略了^$，则只需匹配一个含有数字的字符串即可
//如果只有^,则将匹配以一个数字开头的字符串
//如果只有$则匹配以一个数字结尾的字符串
//只有一个符号是，不需要用括号表示可选(-?)

//?-
//减号后面的？后缀，表示这个减号是可选的

//\d+
// \d和[0-9]一样，匹配一个数字，+表示可以匹配一个或多个数字

//(?:\.\d*)
//可选的非捕获型分组，捕获性能上有损失，所以非捕获型分组代替少了不优美的捕获
//捕获0个或多个数字的小数点

//(?:e[+\-]?\d+)?
//可选的非捕获型分组，它将匹配一个e或E(i忽略大小写)，一个可选的正负号，一个或多个数字










