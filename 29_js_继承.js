//被复用的对象：prototype
// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.getName = function () {
//     return this.name;
// }

// function Cat(name,age){
//     Animal.call(this,name)
//     this.age = age || 1
// }

// Cat.prototype.meow = function(){
//     return `${this.getName()} eoww,i'm ${this.age}` 
// }

// const cat = new Cat('lily',2)
// console.log(cat.meow());

class Animal {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name
    }
}

class Cat extends Animal {
    constructor(name,age){
        super(name)
        this.age = age || 1 
    }
    meow(){
        return `${this.getName()} eoww~~~~,i'm ${this.age} years old`
    }

    // getName(){
    //     return this.name
    // }
}

let cat = new Cat('ff',22)
console.log(cat.name)
console.log(cat.meow())
