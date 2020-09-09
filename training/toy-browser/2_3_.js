function match(string){
    for(let c of string){
        if(c=="a")
            return true;
    }
    return false
}

function indexMatch(string){
    if(string.indexOf("a")>-1){
        return true
    }
    return false;
}
console.log(match("I am groot"))
console.log("-------------")
console.log(indexMatch("I am groot"))