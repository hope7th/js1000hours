/*
flow，水一样的时间老人，
undefined(未怀孕)，Boolean(未出生),number(幼儿园),String(简单少年),null(大学生),Object(有对象，会干活的是函数，退休的挂个名),class(我有构造函数，已婚可遗传后代),Array(集体生活)

类型推断：通过变量的使用上下文来推断出变量类型，然后根据这些推断来检查类型。（猜)

类型注释：事先注释好我们期待的类型，Flow 会基于这些注释来判断。（人家告诉你）

*/

//flow, 我推断你不是数字，
function split(str) {
    return str.split(' ')
  }
  
  split(11)


  //flow,  哦，原来不能是数字
  function add(x: number, y: number): number {
    return x + y
  }
  
  add('Hello', 11)

//原来必须是数字组成的数组
var arr: Array<number> = [1, 2, 3]

arr.push('Hello')

//必须是这种类型的类
class Bar {
    x: string;           // x 是字符串
    y: string | number;  // y 可以是字符串或者数字
    z: boolean;
  
    constructor(x: string, y: string | number) {
      this.x = x
      this.y = y
      this.z = false
    }
  }


//必须是这种类型的对象，和类一样。

var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
    a: 'hello',
    b: 11,
    c: ['hello', 'world'],
    d: new Bar('hello', 3)
  }
  
