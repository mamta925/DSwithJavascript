class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  search(value) {
    if (!this.root) {
      return false;
    }
    let cur = this.root;
    while (cur) {
      if (value === cur.value) {
        return cur;
      }
      if (cur.value < value) {
        cur = cur.right;
      } else {
        cur = cur.left;
      }
    }
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let cur = this.root;
    while (cur !== null) {
      if (cur.value < value) {
        if (cur.right) {
          cur = cur.right;
        } else {
          cur.right = newNode;
          return this;
        }
      } else {
        if (cur.left) {
          cur = cur.left;
        } else {
          cur.left = newNode;
          return this;
        }
      }
    }
  }
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
