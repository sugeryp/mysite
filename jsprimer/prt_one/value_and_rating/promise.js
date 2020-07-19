// `Promise`インスタンスを作成
const promise = new Promise((resol, reject) => {
    // 非同期の処理が成功したときはresolve()を呼ぶ
    resol();
    // 非同期の処理が失敗したときにはreject()を呼ぶ
});
const onFulfilled = () => {
    console.log("resolveされたときに呼ばれる");
};
const onRejected = () => {
    console.log("rejectされたときに呼ばれる");
};
// `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
promise.then(onFulfilled, onRejected);