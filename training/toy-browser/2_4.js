function match(string){
    let foundA = false;
    for(let c of string){
        if(c=="a")
            foundA = true;
        else if(foundA && c=="b")
            return true;
        else 
           foundA = false;
    }
    return false;
}

function indexMatch(string){
    if(string.indexOf("ab")>-1){
        return true
    }
    return false;
}

console.log(match("i abm groot"))
console.log(match("i acbm groot"))