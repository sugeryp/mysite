async function asyncMain() {
    const value = await new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("OK!");
        }, 3000)
    });
    console.log(value); // => 42
    console.log("fin")
}
asyncMain(); // Promiseインスタンスを返す