const fib = (n) => {
    const memo = {};
    memo[0] = 1;
    memo[1] = 1;
    if(n >= 2 ) {
        for(i = 2; i <= n; i++){
            memo[i] = (memo[i - 1] + memo[i - 2])
        }
    }
    return memo[n];
}

for(i = 0; i <= 40; i++) {
    console.log(fib(i));
}