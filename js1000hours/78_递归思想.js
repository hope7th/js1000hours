// Fibonacci数列 1 1 2 3 5 8 13 ... 求第n项
function fib(n){
    if(n==0||n==1) return 1;
    return fib(n-1) + fib(n-2)
}

console.log(fib(100))