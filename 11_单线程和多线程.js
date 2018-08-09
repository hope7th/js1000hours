var a = 20;

function foo() {
    a = a + 1;
}

function bar() {
    a = a * 2;
}

// ajax(..) 是一个给定的库中的随意Ajax函数
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );

//单线程的环境a可能有两种结果，41或者42.
//多线程环境使用共享的内存位置X和Y,则可能有多种结果