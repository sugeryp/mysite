async function asyncMain() {
    const value = await new Promise((resolve, reject) => {resolve(44)}).then((val)=> console.log(val));
    console.log(value); // => 42
    console.log("fin")
}
asyncMain(); // Promiseインスタンスを返す