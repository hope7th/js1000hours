function es5Set() {
    let items = {};
    this.has = function (value) {
        return value in items;
    };
    this.add = function (value) {
      if (!this.has(value)){
          items[value] = value;
          return true
      }
      return false
    };
    this.remove = function (value) {
        if (this.has(value)){
            delete items[value];
            return true
        }
        return false
    };
    this.clear = function () {
        items = {}
    };
    this.size = function () {
        return Object.keys(items).length;

        let count = 0;
        for (let key in items){
            if (items.hasOwnProperty(key)){ //排除对象原型的额外属性
                ++count;
            }
        }
        return count
    };
    this.values = function () {
        let values = [];
        for (let i=0,keys = Object.keys(items);i<keys.length;i++){
            values.push(items[keys[i]])
        }
        return values;
    };
    this.union = function (otherSet) {
        let unionSet = new Set();
        let values = this.values();
        for (let i=0;i<values.length;i++){
            unionSet.add(values[i])
        }
        values = otherSet.values
        for (let i=0;i<values.length;i++){
            unionSet.add(values[i])
        }
        return unionSet

    };
    //交集
    this.intersection = function (otherSet) {
        let intersectionSet = new set();
        let values = this.values();
        for (let i=0;i<values.length;i++){
            if (otherSet.hasOwnProperty(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    //差集
    this.difference = function (otherSet) {
        let differenceSet = new set();
        let values = this.values();
        for (let i=0;i<values.length;i++){
            if (!otherSet.hasOwnProperty(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    //子集
    this.subSet = function (otherSet) {
        if (this.size()>otherSet.size()) {
            return false
        }else {
            let values = this.values();
            for (let i=0;i<values.length;i++){
                if (!otherSet.has(values[i])){
                    console.log(`${values[i]}`)
                    return false
                }
            }
            return true;
        }
    }
}

let es5set = new es5Set();
es5set.add(1);
es5set.add(2);
console.log(es5set)
console.log(es5set.values())
console.log(es5set.size())
es5set.remove(1)
console.log(es5set.values())

let otherSet = new es5Set();
otherSet.add(1)
otherSet.add(2)
console.log(otherSet.values())
console.log(es5set.subSet(otherSet));

//es6 set
let es6Set = new Set();
es6Set.add(1)
console.log(es6Set.values())
let setA = new Set();
let setB  = new Set();
//es6并集
let unionAb = new Set();
for (let x of setA){
    unionAb.add(x)
}
for (let x of setB){
    unionAb.add(x)
}

//交集
// let intersectionab = new Set([x for(x of setA) if (setB.has(x))]) 只有firebox支持简化的语法
//差集
// let intersectionab = new Set([x for(x of setA) if (!setB.has(x))]) 只有firebox支持简化的语法