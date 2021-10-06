/**
 * PROBLEM 1
 * insertAt(p,v)
 * 
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 *
 * @example
 * insertAt(3,3)
 * Verify operation result by outputing the array before and after
 *
 */
let numbers = [ 3, 2, 1, 0]

let insertAt = (p, v) => {
    if(p > numbers.length) {
        console.log("Index not valid");
      } else {
        numbers.splice(p, 1, v);
        console.log(numbers);
      }
}

console.log(numbers)
insertAt(3,3)
console.log(numbers)