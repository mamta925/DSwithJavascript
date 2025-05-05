class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  

let isbalanced = true;


function isBalanced(root) {
    console.log(root, isbalanced)

    if(root === null) return true
     if(!isbalanced) return false;

    let hight = Math.abs(getHeight(root.left) - getHeight(root.right)) 
    if(hight> 1) {
        isbalanced = false;
    }
    return isbalanced;
};

function getHeight(root) {
    if(!root) return 0;

    return  1+ Math.max( getHeight(root.left), getHeight(root.right))

}
console.log(isBalanced(new Node(1)))