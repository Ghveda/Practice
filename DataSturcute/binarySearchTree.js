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

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;

    return true;
  }
}

const binaryTreeInstance = new BinarySearchTree();
binaryTreeInstance.root = new Node(10);
binaryTreeInstance.root.right = new Node(15);
binaryTreeInstance.root.left = new Node(7);
binaryTreeInstance.root.left.right = new Node(9);

module.exports = binaryTreeInstance;
