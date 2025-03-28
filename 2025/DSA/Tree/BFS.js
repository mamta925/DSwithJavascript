class Node {
constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
}
}

class Tree {
    constructor(value){
        this.root = new Node(value)
    }
    bfsRecursive(queue = [this.root], visited = []) {
        if (queue.length === 0) return visited;
    
        const node = queue.shift();
        visited.push(node.value);
    
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    
        return this.bfsRecursive(queue, visited);
    }



    bfs(){
        const visited = []
        const queue=[];
        let pointer = this.root


        queue.push(pointer)
        while(queue.length){
           pointer = queue.shift();
           visited.push(pointer.value)
           if(pointer.left) queue.push(pointer.left)
            if(pointer.right) queue.push(pointer.right)
        }
        return visited;
    }


}

class DFS {
    constructor(root){
        this.root = root;
    }
    
    preOrder(pointer, result=[]){
     if(!pointer){
        return;
     }
     result.push(pointer.value)
     this.preOrder(pointer.left, result);
     this.preOrder(pointer.right, result);

     return result;

    }
    postOrder(pointer, result=[]){
        if(!pointer){
           return;
        }
        this.postOrder(pointer.left, result);
        this.postOrder(pointer.right, result);
        result.push(pointer.value)
        return result;
       }
       inOrder(pointer, result=[]){
        if(!pointer){
           return;
        }
        this.inOrder(pointer.left, result);
        result.push(pointer.value)
        this.inOrder(pointer.right, result);
        return result;
       }
       preOrderIterative(root) {
        if (!root) return [];
      
        const stack = [root];
        const result = [];
      
        while (stack.length > 0) {
          const node = stack.pop();             
          result.push(node.value);              
      
          if (node.right) stack.push(node.right);
          if (node.left) stack.push(node.left);  
        }
      
        return result;
      }
}

const tree = new Tree(10);
tree.root.left = new Node(6);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);
tree.root.right = new Node(15);
tree.root.right.right= new Node(20);
//console.log(tree.bfs())

const dfs = new DFS(tree.root);

console.log("perOrder", dfs.preOrder(tree.root));
console.log("postOrder", dfs.postOrder(tree.root));
console.log("Inorder",dfs.inOrder(tree.root));