function Point (x,y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return `(${this.x},${this.y})`//模板字符串
}
var p = new Point(1,2)
console.log(p.toString());

class Point2 {
  constructor (x,y){
    this.x = x;
    this.y = y;
  }
  toString(){
    return `(${this.x},${this.y})`
  }
  toValue(){
    return this.x + this.y
  }
}

var p2 = new Point2(3,4)
console.log(p2.toString())
console.log(p2.toValue())
console.log(p2.hasOwnProperty("x"))
console.log(p2.hasOwnProperty("y"))
console.log(p2.hasOwnProperty("toString"))
console.log(p2.__proto__.hasOwnProperty("toString"))
console.info(p2.__proto__)