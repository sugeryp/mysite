const M = 10;
const N = 100;

const check = function(remain, pre) {
    // assign peaple to table till the end
    if (remain < 0) return 0;
    else if (remain == 0) return 1;
    else {
        let cnt = 0;
        for(let i = pre; i <= M; i++) {
            cnt += check(remain - i, i);
        }
            return cnt;
    }
}
console.log(check(N, 2));
