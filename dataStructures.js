const singlyLinkedList = require('./DataSturcute/singlyLinkedList');
const doubleLinkedList = require('./DataSturcute/doublyLinkedList');
const stackInstance = require('./DataSturcute/stack');

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
