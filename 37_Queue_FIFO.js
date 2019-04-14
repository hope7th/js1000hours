function Queue() {
    let items = [];
    this.enqueue=function (element) {
        items.push(element)
    };

    this.dequeue = function () {
        return this.shift();
    };

    this.front = function () {
        return items[0]
    };
    this.isEmpty = function () {
        return items.length ==0;
    }
    this.size = function () {
        return items.length;
    }

    this.print = function () {
        console.log(items.toString())
    }
}


//es6 queue

let Queue2 = (function () {
    const items = new WeakMap();
    class Queue2 {
        constructor (){
            items.set(this,[])
        }
        enqueue(element){
            let q = items.get(this)
            q.push(element)
        }
        dequeue(){
            let q = items.get(this);
            let r = q.shift();
            return r
        }
    }
    return Queue2;
})()
