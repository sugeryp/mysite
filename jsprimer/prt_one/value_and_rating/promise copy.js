// `Promise`インスタンスを作成
const promise = new Promise((resol, reject) => {
    // 非同期の処理が成功したときはresolve()を呼ぶ
    resol("1st");
    // 非同期の処理が失敗したときにはreject()を呼ぶ
});
const onFulfilled = () => {
    console.log("resolveされたときに呼ばれる");
};
const onRejected = () => {
    console.log("rejectされたときに呼ばれる");
};
// `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
promise.finally(arg => {console.log("fin!"); return new Promise((resolve, reject) => {resolve("3rd!")});}).then(arg => {console.log(arg)}).catch(err => {console.error(err)});
const val = promise.finally(arg => {console.log("fin!"); throw new Error("yabatan!"); return([arg, "2nd"]);}).then(arg => {console.log(arg)}).catch(err => {console.error(err)});