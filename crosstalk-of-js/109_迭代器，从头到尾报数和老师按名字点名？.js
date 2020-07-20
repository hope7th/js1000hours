/**
 * 对象的在内存中的储存方式是不连续的，
 * 数组在内存中的存储方式是连续的吗？
 * 一个数据结构只要部署了 Symbol.iterator 属性, 就被视为具有 iterator接口, 就可以使用 for of循环。
 * 
 * 哈希算法，是对象储存的方式。
 * 「数字属性应该按照索引值⼤⼩升序排列，字符 串属性根据创建时的顺序升序排列。」在这⾥我们把对象中的数字属性称为 「排序属性」
 * ，在V8中被称为 elements，字符串属性就被称为 「常规属性」，
 */

/**
 * 大学开学军训，教官说：向右看，报数，于是从头到尾开始报数。
 * 计算机课堂上，老师说，点名啦，张三，李四，王五。。。。
 * 老师对着花名册大喊一声：报数，全体学生全部懵逼.......
 *  花名册的排序方式是按名字笔画排序，在计算机中，这种方式称为哈希算法。
 */

const obj = {
    a: 1,
    b: 2,
    c: 3
}

for (let i in obj) {
    console.log(i)
}

try {
    for (let j of obj) {
        console.log(j)
        //   obj is not iterable
    }
} catch (e) {
    console.log(e)
}

function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this["B"] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this["A"] = 'bar-A'
    this["C"] = 'bar-C'
}
var bar = new Foo()
for (key in bar) {
    console.log(`index:${key} value:${bar[key]}`)
}

/***
   * 只要有 iterator 接口的数据结构,都可以使用 for of循环。
数组 Array
Map
Set
String
arguments对象
Nodelist对象, 就是获取的dom列表集合
   */