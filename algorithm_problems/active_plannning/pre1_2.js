const M = 10;
const N = 100;

const memo = {};

const check = function(remain, pre) {

    if (memo[[remain, pre]]) return memo[[remain, pre]];
    // assign peaple to table till the end
    if (remain < 0) return 0;
    else if (remain == 0) return 1;
    else {
        let cnt = 0;
        for(let i = pre; i <= M; i++) {
            cnt += check(remain - i, i);
        }
        // memo of created count from pair of remain and pre
        // property_name convert to String suggestive, alternate notation is `${remain}, ${pre}`
        return memo [[remain, pre]] =cnt;
    }
    
}
console.log(check(N, 2));
