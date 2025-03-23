class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
      
        if (!this.root) {
          this.root = newNode;
          return;
        }
      
        let current = this.root;
      
        while (true) {
          if (value < current.value) {
            if (!current.left) {
              current.left = newNode;
              return; // done inserting
            }
            current = current.left;
          } else {
            if (!current.right) {
              current.right = newNode;
              return; // done inserting
            }
            current = current.right;
          }
        }
      }
      lookup(value) {
        let current = this.root;
      
        while (current) {
          if (value < current.value) {
            current = current.left;
          } else if (value > current.value) {
            current = current.right;
          } else {
            return current; 
          }
        }
      
        return null; 
      }

      _helper(node){
        if (!node.left) return node.right;
        if (!node.right) return node.left;
            const lastRight = this._findLastRight(node.left);
            lastRight.right = node.right;
            return node.left;

      }
      _findLastRight(node) {
        while (node.right) {
          node = node.right;
        }
        return node;
      }
  
    remove(key) {

        if(!this.root){
            return null;
        }

        if(this.root.value === key){
            this.root = this._helper(this.root)
            return;
        }
        let current = this.root;

       while(current){
        if(key<current.value){

            if(current.left && current.left.value == key){
                current.left = this._helper(current.left);
                break;
            } else {
                current = current.left;
            }

        } else {
            if(current.right && current.right.value == key){
                current.right= this._helper(current.right);
                break;
            } else {
                current = current.right;
            }

        }
       }
      
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(6);
  tree.insert(20);
  tree.insert(1);
  tree.insert(15);
  tree.insert(170);
//   tree.remove(15);
  console.log(JSON.stringify(traverse(tree.root)));

 tree.remove(9);
  console.log(JSON.stringify(traverse(tree.root)));
  console.log(tree.lookup(20));
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }