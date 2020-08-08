const M = 10;
const N = 100;

const table = [];
for(i = 0; i <= M; i++) {
    table[i] = []
    for(j = 0; j <= N; j++){
        table[i][j] = 0;
        //console.log(`table[${i}][${j}]${table[i][j]}`)
    }
}

for(i = 0; i <= M; i++){
    table[i][0] = 1;
    //console.log(`table[${i}][0]${table[i][0]}`)
}

for(i = 1; i <= M; i++){
    for(j = 2; j <= N; j++){
        if((i >= 2) && (j >= i)) table[i][j] = table[i][j-i];
        if(i > 2) table[i][j] += table[i-1][j];
    }
}

console.log(table[M][N]);