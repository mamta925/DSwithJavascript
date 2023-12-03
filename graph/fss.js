class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2){
        if(v1!=v2){
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
        }
    }
    helper(vertex, travesedNode, visitedNode){

        visitedNode[vertex] = vertex;
        travesedNode.push(vertex)

        for(let i=0; i< this.adjacencyList[vertex].length; i++){
            let v = this.adjacencyList[vertex][i]
            if(!visitedNode[v]){
                this.helper(v, travesedNode, visitedNode)
            }
        }
    }
    dfs(start){
       let travesedNode = [];
       let visitedNode = {};

       this.helper(start, travesedNode, visitedNode)
      return travesedNode;

    }
}


let dfs = new Graph();
dfs.addVertex(1)
dfs.addVertex(2)
dfs.addVertex(3)
dfs.addVertex(4)
dfs.addVertex(5)
dfs.addVertex(6)
dfs.addVertex(7)
dfs.addVertex(8)
dfs.addVertex(9)
dfs.addEdge(1,2)
dfs.addEdge(1,6)
dfs.addEdge(2,3)
dfs.addEdge(2,4)
dfs.addEdge(4,5)
dfs.addEdge(5,8)
dfs.addEdge(7,6)
dfs.addEdge(7,8)
dfs.addEdge(6,9)
dfs.dfs(1)