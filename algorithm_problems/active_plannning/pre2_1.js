/**
 * recognition:{
 *  operata (n,r) => {choice number of r items from number of n items; return count of possible situation;}
 * }
 */

const nPr = function(n, r) {
    let result = 1;
    for(i = 1; i <= r; i++) {
        /**
         * if(r = 0) nPr =1; if(r >= 1) nPr = (n-1+1) * (n-2+1) * (n-2) * ... (n-r+1);
         */
        result *= (n-i+1);
    }
    return result;
}

console.log(nPr(10,0))
console.log(nPr(10,1))