

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
          }

    }
    addEdge(vertex1, vertex2){
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (!this.adjacencyList[vertex1].includes(vertex2)) {
              this.adjacencyList[vertex1].push(vertex2);
            }
            if (!this.adjacencyList[vertex2].includes(vertex1)) {
              this.adjacencyList[vertex2].push(vertex1);
            }
          }

    }
    removeVertex(vertex){
        if (this.adjacencyList[vertex]) {
            for (const adjacentVertex of this.adjacencyList[vertex]) {
              this.removeEdge(vertex, adjacentVertex);
            }
            delete this.adjacencyList[vertex];
          }

    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]?.filter(
            v => v !== vertex2
          ) || [];
          this.adjacencyList[vertex2] = this.adjacencyList[vertex2]?.filter(
            v => v !== vertex1
          ) || [];

    }

    breadthFirstIterative(start){
        const queue = [],
        visited = {}, result = [];
        queue.push(start)

        while(queue.length){
            const currentVertex = queue.shift()
            if(!visited[currentVertex]) {
                result.push(currentVertex)
                visited[currentVertex] = true;
                for(let i =0;i< this.adjacencyList[currentVertex].length;i++){
                    queue.push(this.adjacencyList[currentVertex][i])
                }
            }


        }

        return result

    }

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
    breadthFirstRecursive(start, queue=[], result=[], visited={}){
        if (queue.length === 0 && start) {
            queue.push(start);
        }
    
        if (queue.length === 0 || !start) {
            return result;
        }
        const currentVertex = queue.shift()
        if(!visited[currentVertex]) {
            result.push(currentVertex)
            visited[currentVertex] = true;
            for (let neighbor of this.adjacencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                }
            }
            }
            if (queue.length > 0) {
                return this.breadthFirstRecursive(null, queue, result, visited);
            }


        return result

    }
    depthFirstIterative(start){
        const stack = [],
        visited = {}, result = [];
        stack.push(start)

        while(stack.length){
            const currentVertex = stack.pop()
            if(!visited[currentVertex]) {
                result.push(currentVertex)
                visited[currentVertex] = true;
                for(let i =0;i< this.adjacencyList[currentVertex].length;i++){
                    stack.push(this.adjacencyList[currentVertex][i])
                }
            }


        }

        return result

    }



    depthFirstRecursive(vertex, visited={}, result=[]){
        if(visited[vertex] || !vertex) return;
        result.push(vertex);
        visited[vertex]=true;
      this.adjacencyList[vertex].forEach(neighbour => {
        
        if(!visited[neighbour]){
            this.depthFirstRecursive(neighbour, visited, result)
        }
      });

  return result;


    }

}

let graph = new Graph();


graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")
console.log(graph.depthFirstRecursive("A"))
console.log(graph.depthFirstIterative("A"))
console.log(graph.breadthFirstIterative("A"))
console.log(graph.breadthFirstRecursive("A"))






// graph.addVertex("Dallas")
// graph.addVertex("Aspen")
// graph.addVertex("UK")
// graph.addVertex("London")
// graph.addVertex("Dublin")

// graph.addEdge("Dallas", "Aspen")
// graph.addEdge("UK", "Aspen")
// graph.addEdge("Dublin", "Aspen")
// graph.addEdge("Londo", "Aspen")
// graph.addEdge("Dallas", "UK")

// console.log(graph.adjacencyList);
// graph.removeEdge("UK", "Aspen")
// console.log(graph.adjacencyList);