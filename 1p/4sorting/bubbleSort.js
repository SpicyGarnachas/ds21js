//1. bubblesort
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

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

console.time("time");
console.log(bubbleSort(genNumbers()));
console.timeEnd("time");
