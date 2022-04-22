/**
 * finds the shortest path between two vertex in a graph
 */

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijkstra(start, finish) {
    const queue = new PriorityQueue();
    let distances = {};
    let previous = {};
    for (let vertex in this.adjacencyList) {
      if (start === vertex) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
  let path = []
    while (true) {
      let currentVertex = queue.dequeue().val;
      if (currentVertex === finish) {
        //BUILD UP PATH TO RETURN AT END
        while (previous[currentVertex]) {
          path.push(currentVertex);
          currentVertex = previous[currentVertex];
        }
        break;
      }
      if(currentVertex || distances[currentVertex] !== Infinity){
      this.adjacencyList[currentVertex].forEach((neighborObj) => {
        let neighborObjVertex = neighborObj.node;
        let currentDistance = distances[currentVertex] + neighborObj.weight;
        if (currentDistance < distances[neighborObjVertex]) {
          distances[neighborObjVertex] = currentDistance;
          previous[neighborObjVertex] = currentVertex;
          queue.enqueue(neighborObjVertex, neighborObj.weight);
        }
      });
    }
    }
    return path.concat(start).reverse();   
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
