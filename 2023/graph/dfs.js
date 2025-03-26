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
     helper(vertex, result, visited){

        if(!vertex){
            return null
        }
        if(!visited[vertex]){
            result.push(vertex);
            visited[vertex] = true;
            for(let i = 0; i< this.adjacencyList[vertex].length; i++){
                this.helper(this.adjacencyList[vertex][i], result, visited)  
            }
        }
      
     }

     depthFirstIterative(start){
        let result = [];
        let visited = {};
        let stack = [start]

        visited[start] = true;
        while(stack.length){
           let vertex = stack.pop();
            result.push(vertex);
          
           this.adjacencyList[vertex].forEach(v => {
            if(!visited[v]){
            stack.push(v);
            visited[v] = true
            }
           }); 
        }
        return result;
    }
     depthFirstRecursive(start){
         let result = [];
         let visited = {};
         this.helper(start, result, visited)
         return result;
     }
  }
  
  let g = new Graph();

  g.addVertex("A")
  g.addVertex("B")
  g.addVertex("C")
  g.addVertex("D")
  g.addVertex("E")
  g.addVertex("F")
  
  
  g.addEdge("A", "B")
  g.addEdge("A", "C")
  g.addEdge("B","D")
  g.addEdge("C","E")
  g.addEdge("D","E")
  g.addEdge("D","F")
  g.addEdge("E","F")
  console.log(g.depthFirstRecursive("A"))
  console.log(g.depthFirstIterative("A"))