/*展开操作符 */
// 发作业
let firstHalf = ["one","two"];
let secondHalf = [...firstHalf,"three","four"];
console.log(secondHalf)

const hero = {
    name:"Xena -Warrior Pricess",
    realName:"lucy lawless"
}

const heroWithSword = {
    ...hero,
    weapon:"sword"
}

console.log(heroWithSword)

const dictandlist = {
    ...secondHalf,
    ...hero,
    weapon:"sword"
}
console.log(dictandlist)

// { '0': 'one',
// '1': 'two',
// '2': 'three',
// '3': 'four',
// name: 'Xena -Warrior Pricess',
// realName: 'lucy lawless',
// weapon: 'sword' }


// 收作业
function add(first,second,...remaining){
    return first + second + remaining.reduce((acc,curr)=>acc+curr,0) 
}
console.log(add(1,2,3,4,5))

//2:模版字符串

//引入模范生，提高升学率

class Product {
    constructor(name,description,price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getDescription(){
        return `full description \n name:${this.name} \n description:${this.description}`
    }
}

let product = new Product("zfp","3xia5chu2","10")
console.log(product.getDescription())

//3：简写属性

//直辖市简称

function createCoord(x,y){
    return {
        x,y
    }
}
console.log(createCoord("ss","uu"))
// { x: 'ss', y: 'uu' }

const math = {
    add(a,b){return a+b;},
    sub(a,b){return a-b;},
    multiply(a,b){return a*b;}
}
console.log(math.multiply(9,9))










