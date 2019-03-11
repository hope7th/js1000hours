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
       }
   }
   return Stack;
})()

stack = new es6Stack();
console.log(stack.isEmpty());
stack.push(15);
stack.push(18);
console.log(stack.peek())
stack.push(111);
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.print())