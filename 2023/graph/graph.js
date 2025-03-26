class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1)
   }
   removeEdge(v1, v2){
    this.adjacencyList[v1] =  this.adjacencyList[v1].filter( v => v!=v2);
   
   this.adjacencyList[v2] =  this.adjacencyList[v2].filter( v => v!=v1);
   }
   removeVertex(vertex){
    for(let i = 0; i< this.adjacencyList[vertex].length; i++){
        this.removeEdge(vertex,this.adjacencyList[vertex][i] )
    }
    delete this.adjacencyList[vertex];
   }
}

let g = new Graph();
g.addVertex("1213")
g.addVertex("A13")
g.addVertex("B13")
g.addEdge("1213", "A13")
g.addEdge("A13", "B13")
g.addEdge("B13", "1213")
