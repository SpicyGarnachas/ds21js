// 1. DS-obj
// a. produce 1e5 random names, ie name35927
// b. add each random name into our ds-obj
// c. measure the time it took
// d. calculate the average of 7 runs
let obj = {}

let dsObj = () => {
    let randomNames = () => {
        let number = Math.floor(Math.random() * (10000)) + 1
        return "name" + number
    }
    
    for (let i = 0; i < 1e5; i++){
        obj[i] = randomNames()
    }
}

console.time("time");
dsObj();
console.log(obj[99999])
console.timeEnd("time");

//51.948ms
//53.826ms
//55.652ms
//51.389ms
//51.948ms
//53.826ms
//56.003ms
//avg = 53.513ms
