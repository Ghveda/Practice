const singlyLinkedList = require('./DataSturcute/singlyLinkedList');
const doubleLinkedList = require('./DataSturcute/doublyLinkedList');


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

console.log(doubleLinkedList);