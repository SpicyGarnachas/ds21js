//2. selectionsort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

let number = [];
let genNumbers = () => {
    for (let i = 0; i < 10000; i++){
        number.push(Math.floor(Math.random() * ((10000 + 1) - 1) + 1));
    }
    return number;
}

const selectionSort = (arr) => {
    for (let i=0; i <= arr.length-1; i++) {
      // find the idnex of the smallest element
      let smallestIdx = i
  
      for (let j=i; j <= arr.length-1; j++) {
        if (arr[j] < arr[smallestIdx]) { 
          smallestIdx = j
        }
      }
  
      // if current iteration element isn't smallest swap it
      if (arr[i] > arr[smallestIdx]) {
        let temp = arr[i]
        arr[i] = arr[smallestIdx]
        arr[smallestIdx] = temp
      }
    }
  
    return arr
  }

console.time("time");
console.log(selectionSort(genNumbers()));
console.timeEnd("time");