function foo() {
    try {
        return 0
    } catch (err) {

    } finally {
        console.log("a")
    }
}

var s = foo();
console.log(s);

function foo1() {
    try {
        return 1;
    } catch (err) {} finally {
        return 2;
    }
}
console.log(foo1())
/**
 * [[type]] 表示完成的类型，有 break continue return throw 和 normal 几种类型；
 * [[value]] 表示语句的返回值，如果语句没有，则是 empty；
 * [[target]] 表示语句的目标，通常是一个 JavaScript 标签
 */
{
    var i = 1;
    return i;
    i++;
    console.log(i);
}
console.log(i);
outer:while(true){
    inner:while(true){
        break outer;
    }
}