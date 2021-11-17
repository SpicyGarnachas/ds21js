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