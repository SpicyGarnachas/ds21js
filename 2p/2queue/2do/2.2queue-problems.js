/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 */

 class ArrayQueue {
    constructor() {
        this.element = [];
        this.length = 0;
        this.frontIndex = 0;
        this.backIndex = -1;
    }
    isEmpty() {
        return (this.length == 0);
    }

    enqueue(value) {
        this.backIndex++;
        this.element[this.backIndex] = value;
        this.length++;
    }

    dequeue() {
        if(this.isEmpty()) throw(new Error("No elements"));
        const value = this.getFront();
        this.element[this.frontIndex] = null;
        this.frontIndex++;
        this.length--;
        return value;
    }
}

let queue = new ArrayQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);