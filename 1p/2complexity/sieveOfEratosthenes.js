//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

let eratosthenes = (n) => {
    var array = [], upperLimit = Math.sqrt(n), output = [];
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
}

//verify output is correct
console.log("/// sieve of Eratosthenes ///")
console.log(eratosthenes(4))
