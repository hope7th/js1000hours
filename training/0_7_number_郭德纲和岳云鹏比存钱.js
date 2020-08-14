console.log(typeof null)  //object
console.log(0 .toString());
console.log(0..toString());
console.log(0.1.toString());
/**
 * ieee754 Double Float Number属于双精度浮点数
 * float 浮点数，小数点可以来回浮动的。
 * Sign(1) //一个符号位
 * Exponent(11) //11个指数位
 * Fraction(52) //52个精度位
 * 
 * 单精度浮点数 1+8+23 32位  4个字节
 * +1.111111111111111111111*2^127（1.后面23个1，由于尾数的范围1～2，其最高位总为1，故只需存取小数部分，所以小数为是23位1）
 * 
 * 双精度浮点数 1+11+52  64位 8个字节
 * 表示的范围为+1.111111111111111111111*2^1023（1.后面52个1）为1.7*10^308。负数亦然。
 * 
 * 郭德纲和岳云鹏比大款，
 */

console.log(0.1+0.2==0.3);
console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);

/**
 * 浮点数运算的精度问题导致等式左右的结果并不是严格相等，
 * 而是相差了个微小的值。
 */

 