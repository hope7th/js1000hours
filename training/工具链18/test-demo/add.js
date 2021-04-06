export function add(a,b){
    return a + b;
}
export function mul(a,b){
  return a * b
}
// 不用@babel/register的时候
// module.exports.add = add; 
// module.exports.add = mul;
