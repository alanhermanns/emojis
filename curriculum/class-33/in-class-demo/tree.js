class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const node = new Node(value);
    if(!this.root) return this.root = node;

    let currentNode = this.root;

    // eslint-disable-next-line no-constant-condition
    while(true) {
      if(currentNode.value <= value) {
        if(currentNode.left) {
          currentNode = currentNode.left;
          continue;
        } else {
          currentNode.left = node;
          break;
        }
      } else {
        if(currentNode.right) {
          currentNode = currentNode.right;
          continue;
        } else {
          currentNode.right = node;
          break;
        }
      }
    }
  }

  contains(value) {
    if(!this.root) return false;

    let currentNode = this.root;
    while(currentNode) {
      if(currentNode.value === value) {
        return true;
      } else if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  inOrder(node, arr = []) {
    if(!node) return arr;
    this.inOrder(node.left, arr);
    arr.push(node.value);
    this.inOrder(node.right, arr);

    return arr;
  }
}
