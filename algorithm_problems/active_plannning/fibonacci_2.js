// create memo object
const memo = {};
const fib = (n) => {
    // if key n is exist in memo, function return value
    if (memo.hasOwnProperty(n)) return memo[n];
    
    if(n <= 1) {
        memo[n] = 1
    } else {
        memo[n] = (fib(n - 1) + fib(n - 2))
    }
    return memo[n];
}

for(i = 0; i <= 40; i++) {
    console.log(fib(i));
}