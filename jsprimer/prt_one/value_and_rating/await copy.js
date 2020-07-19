let value1 = 0;

async function asyncMain3() {
    console.log("fin2 before")
    value1 = await new Promise((resolve, reject) => {console.log("1st!")});
    console.log("fin2 after")
}
asyncMain3().catch((err) => console.log(err.message));

async function asyncMain4() {
    const value = await new Promise();
    console.log("fin2")
}
asyncMain4().catch((err) => console.log(err.message));

async function asyncMain() {
    const value = await Promise.resolve(42);
    console.log(value); // => 42
    console.log("fin")
    console.log(value1)
}
asyncMain(); // Promiseインスタンスを返す

async function asyncMain2() {
    const value = await new Promise();
    console.log("fin2")
}
asyncMain2().catch((err) => console.log("yabatan!"));

