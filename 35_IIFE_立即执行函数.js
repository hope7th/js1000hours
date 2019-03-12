function foo() {
}
foo();

(function iife() {})()

//foo和(function iife() {})本质上是一样的

var a = 42;
(function iife() {
    a = 10;
    console.log(a)
})();
console.log(a);

var x = (function iife() {
    return 42;
})();
console.log(x)

var y = function ss() {
    return 43;
}

console.log(y);


