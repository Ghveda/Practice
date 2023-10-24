const Node = require('../utils/node');

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    unqueue(val) {
        const newNode = new Node(val);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode;
        }

        return this.size++;
    }

    dequeue() {
        if (!this.first) return null;
        const temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}

const queueInstance = new Queue();

module.exports = queueInstance;