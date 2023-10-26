const Node = require('../utils/node');

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    const removedItem = this.tail;
    if (!this.tail) {
      return null;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      removedItem.prev = null;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;

    return removedItem;
  }

  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

      return current;
    }

    this.head = this.head.next;
    this.head.prev = null;
    this.length--;

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    const currentHead = this.head;

    if (!currentHead) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } else {
      this.head.prev = newNode;
      this.newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  get(index) {
    if (index < 0 || this.length <= index) return null;

    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }

      return current;
    }
  }

  set(index, val) {
    const current = this.get(index);

    if (!current) {
      return false;
    }
    current.val = val;

    return true;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const currentNode = this.get(index - 1);
    const beforeNode = currentNode.prev;
    const afterNode = currentNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    currentNode.prev = null;
    currentNode.next = null;
    this.length--;


    return currentNode;
  }
}

const list = new DoubleLinkedList();

module.exports = list;