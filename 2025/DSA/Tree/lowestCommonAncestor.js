// Define the TreeNode class
class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  // Construct the tree
  const root = new TreeNode(3);
  root.left = new TreeNode(5);
  root.right = new TreeNode(1);
  
  root.left.left = new TreeNode(6);
  root.left.right = new TreeNode(2);
  root.left.right.left = new TreeNode(7);
  root.left.right.right = new TreeNode(4);
  
  root.right.left = new TreeNode(0);
  root.right.right = new TreeNode(8);
  
  // Define p and q
  const p = root.left;             // Node with value 5
  const q = root.left.right.right; // Node with value 4
/**
             3
            / \
           5    1
          / \  / \
        6   2 0   8
           / \
          7   4

 */


  
  // Lowest Common Ancestor function (recursive)
  function lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q) {
      return root;
    }
  
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
  
    if (left === null) {
      return right;
    } else if (right === null) {
      return left;
    } else {
      return root;
    }
  }
  
  // Find and display the LCA
  const lca = lowestCommonAncestor(root, p, q);
  console.log(`The Lowest Common Ancestor of ${p.val} and ${q.val} is: ${lca.val}`);
  // Expected output: "The Lowest Common Ancestor of 5 and 4 is: 5"
  