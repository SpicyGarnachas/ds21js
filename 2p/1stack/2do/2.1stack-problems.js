/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * Stack implementation (array-based)
 *
 */

// Stacks implemented with an array
let arrayStack = [];
let genNumbers = () => {
  for (let i = 0; i < 10000; i++){
    arrayStack.push(Math.floor(Math.random() * 10000));
  }
}
console.time('time');
genNumbers();
console.log(arrayStack);
console.timeEnd('time');

//Stacks implemented with a linked list
let linkedListStack = {
  head: null,
  push: function(value){
    let node = {
      value: value,
      next: null
    };
    if(this.head === null){
      this.head = node;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }
}
let genNumbers2 = () => {
  for (let i = 0; i < 10000; i++){
    linkedListStack.push(Math.floor(Math.random() * 10000));
  }
}
console.time('time2');
genNumbers2();
console.log(linkedListStack);
console.timeEnd('time2');



