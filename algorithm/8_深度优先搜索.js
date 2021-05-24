import {
    Graph
} from "./common.js"

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "H");
graph.addEdge("D", "G");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");


graph.dfs = function (callback) {
    var _this = this;
    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < _this.vertices.length; i++) {
            color[_this.vertices[i]] = "white";
        }
        return color;
    };
    var dfsVisit = function (u, color, callback) {
        color[u] = "grey";
        if (callback) {
            callback(u)
        }

        var neighbors = _this.adjList.get(u);
        console.log(neighbors);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === "white") {
                dfsVisit(w, color, callback);
            }
        }
        color[u] = "black"
    }
    var color = initializeColor();
    for (var i = 0; i, this.vertices.length; i++) {
        if (color[this.vertices[i]] === "white") {
            dfsVisit(this.vertices[i], color, callback)
        }
    };

   
}

function printNode(value) {
    console.log('Visited vertes: ' + value)
}

graph.dfs(printNode);