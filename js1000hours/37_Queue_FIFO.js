function Queue() {
    let items = [];
    this.enqueue=function (element) {
        items.push(element)
    };

    this.dequeue = function () {
        return items.shift();
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

// 优先级
 function PriorityQueue() {
     let items = [];
     function QueueElement(element,priority) {
         this.element = element;
         this.priority = priority;
     }
     this.enqueue = function (element,priority) {
         let queueElement = new QueueElement(element,priority);
         let added = false;
         for (let i = 0;i<items.length;i++){
             if (queueElement.priority<items[i].priority){
                 items.splice(i,0,queueElement);
                 added = true;
                 break;
             }
         }

         if (!added){
             items.push(queueElement)
         }
     }
     this.print = function () {
         for (let i = 0;i<items.length;i++){
             console.log(`${items[i].element} - ${items[i].priority}`)
         }
     }
 }


 let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('john','2');
priorityQueue.enqueue('john2','1');
priorityQueue.enqueue('john3','4');
priorityQueue.enqueue('john4','3');
priorityQueue.print()

//击鼓传花
function hotPotato(namelist,num) {
    let queue =  new Queue();
    for (let i=0;i<namelist.length;i++){
        queue.enqueue(namelist[i]);
    }

    let eliminated = '';
    while (queue.size()>1){
        for (let i=0;i<num;i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '在击鼓传华中淘汰');
    }

    return queue.dequeue();
}

let names = ['john','john1','john2','john3','john4','john5'];
let winner = hotPotato(names,7);
console.log('this winner is:'+winner)
