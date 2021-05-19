import { Graph } from "./common.js"

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

var initializeColor = function(){
    var color = [];
    for(var i=0;)
}