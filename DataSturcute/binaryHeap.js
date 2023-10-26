class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);

    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdX = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdX];

      if (element <= parent) break;

      this.values[parentIdX] = element;
      this.values[idx] = parent;
      idx = parentIdX;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }


    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChild;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChild;
        }
      }
      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }
  }
}


class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);

    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdX = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdX];

      if (element.priority <= parent.priority) break;

      this.values[parentIdX] = element;
      this.values[idx] = parent;
      idx = parentIdX;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }


    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChild;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChild;
        }
      }
      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      idx = swap;
    }
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
const priorityQueue = new PriorityQueue();

maxBinaryHeap.insert(41);
maxBinaryHeap.insert(30);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);

module.exports = {
  maxBinaryHeap,
  priorityQueue
};