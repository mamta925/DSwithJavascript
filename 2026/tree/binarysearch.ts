class BinarySearchTree {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }
}

class TreeNode {
    value: unknown;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: unknown) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
