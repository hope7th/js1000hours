/*展开操作符 */
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




