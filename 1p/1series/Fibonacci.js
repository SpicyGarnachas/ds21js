//1. Fibonacci
//   fibonacci(n)
// -> n integer[0,1]
// <- the n first fibonacci elements

let fibonacci = n => {
    var fib = (n == 1) ? [0] : [0, 1]; // check if n equals 1 and return the first element of fibonacci
    for (i = 2; i <= n - 1; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log(fib);
}
fibonacci(2);