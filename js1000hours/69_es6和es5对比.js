//es6 Map和WeakMap有什么区别
var map = new Map();
var weakmap = new WeakMap()
var b = {
    y:12
};
var a = {
    x:12
};
(function(){
    map.set(b,a);
    weakmap.set(b,a);
})()
// Map { { x: 12 } => 1 } WeakMap {}

console.info(map.get(b));
console.info(weakmap.get(b));
console.log("--------")
b=null;
console.info(map.get(b));
console.info(weakmap.get(b));

// map 和 object 和 weakmap,
//比喻：古代皇帝调兵遣将，只要有刻着名字的大印就行(字符串)。后来刻着名字的大印或者视频（字符串和对象）发布命令即可，后来必须视频（必须对象）发布命令。





