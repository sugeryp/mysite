    /**
     * @param {Number} Max maximum count of table
     * @param {Number} Min minimum count of table
     * @param {Number} N count of arranged prople
     */
const Max = 10;
const Min = 2;
const N = 100;

const check = function(table, people) { 
    // @variable {[table, peole]:count of pattern} memo
    const memo = {}
    for(i=0; i<=table; i++) {
        memo[[i,0]] = 1
        // console.log(`[${i},0]:${memo[[i,0]]}`)
    }
    for(i=0; i<=table; i++) {
        memo[[i,1]] = 0
        // console.log(`[${i},1]:${memo[[i,1]]}`)
    }
    for(j=1; j<=people; j++) {
        memo[[0,j]] = 0
        // console.log(`[0,${j}]:${memo[[0,j]]}`)
    }
    for(j=1; j<=people; j++) {
        memo[[1,j]] = 0
        // console.log(`[1,${j}]:${memo[[1,j]]}`)
    }

    if(people >= Min){
        // console.log("ok")
        for(i = Min; i <= table; i++){
            for(j = Min; j <= people; j++){
                memo[[i, j]] = memo[[i-1, j]]+memo[[i, j - i]] 
                console.log(memo[[i-1,j]], memo[[i, j -i]])
            }
        }
    }
    return memo[[table, people]]
}
console.log(check(Max, N));
