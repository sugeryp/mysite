async function asyncMain3() {
    console.log("fin2 before")
    const value = await new Promise((resolve, reject) => {console.log("1st!")});
    console.log("fin2 after")
}
asyncMain3().catch((err) => console.log(err.message)).finally(console.log("finfin"));

async function asyncMain() {
    const value = await Promise.resolve(42);
    console.log(value); // => 42
    console.log("fin")
}
asyncMain(); // Promiseインスタンスを返す