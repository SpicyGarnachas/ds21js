/** 
 * PROBLEM 2
 * removeAt(p)
 *
 * removes value at position p
 * @arg {number} p - position
 *
 * @example
 * removeAt(3)
 *
 */

let numbers = [ 3, 2, 1, 0]

let removeAt = (p) => {
    if(p > numbers.length) {
        console.log("Index not valid");
      } else {
        numbers.splice(p, 1);
      }
}

console.log(numbers)
removeAt(2)
console.log(numbers)
