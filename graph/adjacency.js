class Graph {
    constructor(){
        this.adjanceyList = {}
    }
    addVertex(vertex){
        if(!this.adjanceyList[vertex])
             this.adjanceyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
             this.adjanceyList[vertex1].push(vertex2)
             this.adjanceyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2){
        this.adjanceyList[vertex1] =  this.adjanceyList[vertex1].filter((v)=> v!=vertex2)
        this.adjanceyList[vertex2] =  this.adjanceyList[vertex2].filter((v)=> v!=vertex1)
     }
     removeVertex(vertex){
        for(let i = 0; i< this.adjacencyList[vertex].length; i++){
            this.removeEdge(vertex,this.adjacencyList[vertex][i] )
        }
        delete this.adjacencyList[vertex];
       }
}