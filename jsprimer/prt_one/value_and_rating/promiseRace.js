// `timeoutMs`ミリ秒後にresolveする
function delay(timeoutMs) {
    console.log("first"+timeoutMs)
    return new Promise((resolve) => {
        console.log(timeoutMs);
        setTimeout(() => {
            resolve(timeoutMs);
        }, timeoutMs);
    });
}
const promise1 = delay(1);
const promise2 = delay(2);
const promise3 = new Promise((resolve) => {resolve("tata");console.log("Sekaiichi!")});

Promise.race([promise1, promise2, promise3]).then(function(values) {
    console.log(values);  // => [1, 2, 3]
},function(err){console.error(err);});

console.log("fin");


Promise.race([delay(10), delay(20), new Promise((resolve) => {resolve("tata");console.log("Sekaiichi!")})]).then(function(values) {
    console.log(values);  // => [1, 2, 3]
},function(err){console.error(err);});

