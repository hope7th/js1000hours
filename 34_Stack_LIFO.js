function Stack() {
    let items = [];
    this.push = function (element) {
        items.push(element)
    }
    this.pop = function () {
        return items.pop();
    }

    this.peek = function () {
        return items[items.length -1]
    }
    this.size = function () {
        return items.length;
    }
    this.isEmpty = function () {
        return items.length==0;
    }
    this.clear = function () {
        items = []
    }
    this.print = function () {
        console.log(items.toString())
    }
}
let stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek())
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.print())


//es6栈写法
let es6Stack = (function () {
   const items = new WeakMap();
   class Stack {
       constructor () {
           items.set(this, [])
       }

       push(element) {
           let s = items.get(this);
           s.push(element)
       }
       pop() {
           let s = items.get(this);
           let r = s.pop()
           return r;
       }

       peek() {
           let s = items.get(this);
           return s[s.length -1]
       }
       size() {
           let s = items.get(this);
           return s.length;
       }
       isEmpty () {
           let s = items.get(this);
           return s.length==0;
       }
       clear() {
           let s = items.get(this);
           s = []
       }
       print() {
           let s = items.get(this);
           console.log(s.toString())
           return s.toString();
       }
   }
   return Stack;
})()

console.log('----------------')

stack = new es6Stack();
console.log(stack.isEmpty());
stack.push(15);
stack.push(18);
console.log(stack.peek())
stack.push(111);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.print())

console.log('3----------------')
const tmpitems = new WeakMap();
console.log(tmpitems)
let dic = {ss:"ss"};
tmpitems.set(dic,[]);
let ssssss = tmpitems.get(dic);
console.log(ssssss);
ssssss.push('s1');
ssssss.push('s2');
ssssss.push('s3');
console.log(ssssss);

// console.log(tmpitems);
console.log(tmpitems.get(dic));


const tmps = new Object();
tmps.s1='s1';
tmps.s2='s2';
console.log(tmps);

// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
//
// 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
//

