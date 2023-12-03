class Node {
  constructor(value){
      this.val = value;
      this.right = null;
      this.left = null;
  }
}

class BinaryTree {
  constructor(){
      this.root = null;
  }
   maxPathDown = function(root, max){
    if(root == null) return 0;
   
       let leftH = Math.max(0, this.maxPathDown(root.left, max))
       let rightH = Math.max(0, this.maxPathDown(root.right, max))
       max = Math.max(max, leftH+rightH+root.val);
       return (root.val + Math.max(leftH, rightH))

}
 maxPathSum = function(root) {

    let max = -Number.MAX_VALUE;
     max =   this.maxPathDown(root, max)
   return max;
};
}

let bt = new BinaryTree();
bt.root = new Node(2);
bt.root.left = new Node(1);
bt.root.right = new Node(3);
bt.maxPathSum(bt.root);


