var numbers = [1,2,3,4,5];
numbers.forEach(function (x) {
    console.log(x%2==0)
})
numbers.forEach(x=>{
    console.log((x%2)==0)
})

for (let n of numbers){
    console.log((n%2==0)?'even':'odd')
}

let numbers2= Array.from(numbers,x=>(x%2==0))
console.log(numbers2)

let numbers3 = Array.of(...numbers);
console.log(numbers3)