const singlyLinkedList = require('./DataSturcute/singlyLinkedList');
const doubleLinkedList = require('./DataSturcute/doublyLinkedList');
const stackInstance = require('./DataSturcute/stack');
const queueInstance = require('./DataSturcute/queues');
const binaryTreeInstance = require('./DataSturcute/binarySearchTree');
const graphInstance = require('./DataSturcute/graph');
const { priorityQueue, maxBinaryHeap } = require('./DataSturcute/binaryHeap');

// ! Use singlyLinkedList methods
singlyLinkedList.push('1');
singlyLinkedList.push('2');
singlyLinkedList.push('3');
singlyLinkedList.shift();
singlyLinkedList.unshift('some');
singlyLinkedList.set('!!!!', 0);
singlyLinkedList.get(0);
singlyLinkedList.insert('inserted-element', 1);
singlyLinkedList.remove(1);
singlyLinkedList.reverse();

// ! Use doubleLinkedList methods
doubleLinkedList.push(1);
doubleLinkedList.push(2);
doubleLinkedList.push(3);
doubleLinkedList.pop()
doubleLinkedList.shift()
doubleLinkedList.get(2);
doubleLinkedList.set(0, 4)
doubleLinkedList.insert(1, 4);
doubleLinkedList.remove(0);

// ! Use stackInstance methods
stackInstance.push(1);
stackInstance.push(2);
stackInstance.pop();


// ! Use queueInstance methods
queueInstance.unqueue(1);
queueInstance.unqueue(2);
queueInstance.unqueue(3);
queueInstance.dequeue();

// ! Use binaryTreeInstance methods
binaryTreeInstance.insert(9);
binaryTreeInstance.find(100);

// ! Use maxBinaryHeap methods
maxBinaryHeap.insert(55);
maxBinaryHeap.extractMax();

// ! Use priorityQueue methods
priorityQueue.enqueue(1, 1);
priorityQueue.enqueue(1, 2);

// ! Use graphInstance methods
graphInstance.addVertex(1);
graphInstance.addVertex(2);
graphInstance.addEdge(1,2);
graphInstance.removeEdge(1,2);
