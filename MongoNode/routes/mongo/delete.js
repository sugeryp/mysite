// MongoDBの設定 ---------------
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// 接続先URL
const url = 'mongodb://localhost:27017';

/*
 * deleteOneサンプルプログラム.
 */
exports.deleteOne = function(req, res){

    //MongoDBの接続
    MongoClient.connect(url, function(err, client) {

        //接続の確認
        assert.equal(null, err);
        console.log("MongoDB Connect");

        //DBの指定
        var db = client.db('testdb');

        //deleteOneの実行
        db.collection('employee').deleteOne(
            { employeeID: 1},
            function(err, result) {

            //エラーが起きてないか検証
            assert.equal(null, err);
            assert.equal(1, result.result.n);
            console.log("deleteOne Success: " + result.result.n);

        });

        //MongoDBのクローズ
        client.close();
        console.log("MongoDB Close");

	});

    res.render('mongo/delete', { title: 'MongoDelete' });
};
