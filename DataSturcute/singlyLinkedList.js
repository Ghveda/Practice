class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (!this.length) {
            this.tail = null;
            this.head = null;
        }

        return current;
    }

    shift() {
        if (!this.head) return undefined;

        const currentHead = this.head;
        this.head = currentHead.next;

        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode.head;
            return;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }


        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(value, index) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = value;

            return true;
        }

        return false;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let previous = this.get(index - 1);
        const newNode = new Node(value);
        const temp = previous.next;

        newNode.next = temp;
        previous.next = newNode;

        return true;
    }

    remove(index) {
        console.log(index);
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const current = this.get(index);
        const prevous = this.get(index - 1);
        prevous.next = current.next;
        this.length--;

        return current;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next = null;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

const list = new SinglyLinkedList();

module.exports = list;