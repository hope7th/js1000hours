export function Dictionary() {
    var items = {};
    this.has = function (key) {
        return items.hasOwnProperty(key)
    };
    this.set = function (key,value) {
        items[key] = value
    };
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true;
        }
        return false;
    };
    this.get=function (key) {
        return this.has(key)?items[key]:undefined
    };
    this.values = function () {
        var values = [];
        for (var k in items){
            if (this.has(k)){
                values.push(items[k])
            }
        }
        return values;
    };
    this.keys = function () {
        return Object.keys(items)
    }
}

export function Queue() {
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

export function Stack() {
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

export function Graph(){
    var vertices = [];
    var adjList = new Dictionary();
    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v,[]);
    };
    this.addEdge = function(v,w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };
    this.toString = function(){
        var s = '';
        for(var i=0;i<vertices.length;i++){
            s += vertices[i]+"->";
            var neighbors = adjList.get(vertices[i]);
            for(var j=0;j<neighbors.length;j++){
                s+=neighbors[i] + ""
            }
            s+="\n";
        }
        return s;
    }

}

