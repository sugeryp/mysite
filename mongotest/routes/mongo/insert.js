// MongoDBの設定 ---------------
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// 接続先URL
const url = 'mongodb://localhost:27017';

/*
 * InsertOneサンプルプログラム.
 */
exports.insertOne = function(req, res){

    //MongoDBの接続
    MongoClient.connect(url, function(err, client) {

        //接続の確認
        assert.equal(null, err);
        console.log("MongoDB Connect");

        //DBの指定(testdb)
        const db = client.db('testdb');

        //登録用ドキュメント
        var document = {employeeID: 1, employeeName: '田村' , age: 30, division: '営業1課'}

        //insertOneの実行
        db.collection('employee').insertOne(
            document
            , function(err, result) {

                //エラーが起きてないか検証
                assert.equal(null, err);
                assert.equal(1, result.insertedCount);
                //コンソールにinsert結果を出力
                console.log("insertOne Success: " + result.insertedCount);

            }
        );

        //MongoDBのクローズ
        client.close();
        console.log("MongoDB Close");

	});

    res.render('mongo/insert', { title: 'MongoInsert' });
};
