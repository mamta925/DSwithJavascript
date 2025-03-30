class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(value, priority) {
      this.values.push({ value, priority });
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
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  
    Dijkstra(startVertex, endVertex) {
      const priorityQueue = new PriorityQueue();
      const distances = {};
      const previousNodes = {};
      let shortestPath = [];
      let currentVertex;
  

      for (let vertex in this.adjacencyList) {
        if (vertex === startVertex) {
          distances[vertex] = 0;
          priorityQueue.enqueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
        }
        previousNodes[vertex] = null;
      }

      while (priorityQueue.values.length) {
        currentVertex = priorityQueue.dequeue().value;
  
        if (currentVertex === endVertex) {

          while (previousNodes[currentVertex]) {
            shortestPath.push(currentVertex);
            currentVertex = previousNodes[currentVertex];
          }
          break;
        }
  
        if (currentVertex) {
          for (let neighbor of this.adjacencyList[currentVertex]) {
            const totalDistance = distances[currentVertex] + neighbor.weight;
  
            if (totalDistance < distances[neighbor.node]) {
              distances[neighbor.node] = totalDistance;
              previousNodes[neighbor.node] = currentVertex;
              priorityQueue.enqueue(neighbor.node, totalDistance);
            }
          }
        }
      }
  
      return shortestPath.concat(currentVertex).reverse();
    }
  }
  var graph = new WeightedGraph()
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  graph.addEdge("A","B", 4);
  graph.addEdge("A","C", 2);
  graph.addEdge("B","E", 3);
  graph.addEdge("C","D", 2);
  graph.addEdge("C","F", 4);
  graph.addEdge("D","E", 3);
  graph.addEdge("D","F", 1);
  graph.addEdge("E","F", 1);
  
  

  console.log(  graph.Dijkstra("A", "E"))
  
  // ["A", "C", "D", "F", "E"]