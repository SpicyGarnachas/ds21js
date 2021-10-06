//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

let fn = n => {
    console.log(Math.floor(Math.random() * (n)) + 1)
}

fn(4000)