// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs
const map = new Map()

let map_ = () => {
    let randomNames = () => {
        let number = Math.floor(Math.random() * (10000)) + 1
        return "name" + number
    }
    
    for (let i = 0; i < 1e5; i++){
        map.set(i, randomNames())
    }
}

console.time("time");
map_();
console.log(map.get(99999))
console.timeEnd("time");

//63.185ms
//62.459ms
//59.023ms
//57.382ms
//58.097ms
//59.323ms
//58.023ms
//avg = 59.641ms
