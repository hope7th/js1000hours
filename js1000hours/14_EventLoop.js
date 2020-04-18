var firstFunction = function () {
    console.log("i'm first!");
}

var secondFunction = function () {
    setTimeout(firstFunction,5000);
    console.log("i'm second")
}

secondFunction();

/*
1:secondFunction 进入调用栈
2:secondFunction调用setTimeout，setTimeout入栈：
3:setTimeout执行后，浏览器会把setTimeout的回调函数(在这个栗子中是firstFunction)放到Event Table中。Event Table 就是个注册站：调用栈让Event Table注册一个函数，该函数会在5秒之后被调用。当指定的事情发生时，Event Table会将这个函数移到Event Queue。Event Queue其实就是个缓冲区域，这里的函数等着被调用并移到调用栈。
问题来了，什么时候函数会从Event Queue移到调用栈咧？JavaScript引擎依据一条规则：有一个monitoring process（不知翻译成啥好）会持续不断地检查调用栈是否为空，一旦为空，它会检查Event Queue里边是否有等待被调用的函数。如果存在，它就会调用这个Queue中第一个函数并将其移到调用栈中。如果Event Queue为空，那么这个monitoring process会继续不定期的检查。这一整个过程就是Event Loop。
4:浏览器继续执行secondFunction的下一行代码，console.log。
5:在background，Event Table会持续地监测是否有事件触发，将函数移到Event Queue中。
6:从回调函数被放入Event Table后5秒钟，Event Table把firstFucntion移到Event Queue中。
7:由于事件循环持续地监测调用栈是否已空，此时它一注意到调用栈空了，就调用firstFunction并创建一个新的调用栈。
* */