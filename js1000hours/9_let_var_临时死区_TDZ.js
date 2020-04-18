{
    console.log(a);
    //a被初始化为undefind
    //console.log(b);
    //b被申明但没被初始化
    var a;
    let b;
    console.log(b)
}

//传统的被var声明的变量，无论它们出现在何处，都会被附着在整个外围的函数作用域中；与此不同的是，let声明附着在块儿作用域，而且在它们出现在块儿中之前是不会被初始化的。
//TDZ,你在访问一个已经被申明，但还没被初始化的变量


//对于TDZ变量和未声明的（或声明的！）变量，typeof的行为是不同的
{
    if(typeof a1==="undefined"){
        console.log("cool")
        //console.log(a1)
    }

    if(typeof b1==="undefined"){
        console.log("cool too")
    }

    let b1;
}

//a1未声明，b1已申明未初始化，typeof 是一个神奇的函数，未声明的函数直接返回undefined,已声明未初始化的函数则直接报错，晕晕晕