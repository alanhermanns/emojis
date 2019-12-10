class Node {
  constructor(val, next = null) {
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(val) {
    const node = new Node(val, this.head);
    this.head = node;
  }

  includes(val) {
    let searchNode = this.head;
    while (searchNode) {
      if (val === searchNode.value) return true;
      searchNode = searchNode.next;
    }

    return false;
  }

  toString() {
    if (!this.head) return '';

    const nodes = [];
    let node = this.head;
    while (node) {
      nodes.push(node.value);
      node = node.next;
    }

    return nodes.join(' -> ');
  }
}

module.exports = LinkedList;
