//1 函数是对象
function t () {};
console.log(t instanceof Object);
console.log(typeof t)

// 2对象都是通过函数创建的

var obj = {
    name:'哈哈',
    age:'18'
}

console.log(typeof obj)
console.log(typeof Object)

