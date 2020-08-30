// MongoDBの設定 ---------------
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// 接続先URL
const url = 'mongodb://localhost:27017';

/*
 * UpdateOneサンプルプログラム.
 */
exports.updateOne = function(req, res){

    //MongoDBの接続
    MongoClient.connect(url, function(err, client) {

        //接続の確認
        assert.equal(null, err);
        console.log("MongoDB Connect");

        //DBの指定(testdb)
        var db = client.db('testdb');
        var collection = db.collection('employee');

        //updateOneの実行
        collection.updateOne(
            { employeeID: 1},
            { $set: {employeeName: '田中'}},
            function(err, result) {

                //エラーが起きてないか検証
                assert.equal(null, err);
                console.log("updateOne Success");
                console.log("matchedCount: " + result.matchedCount);
            }
        );

        //MongoDBのクローズ
        client.close();
        console.log("MongoDB Close");

	});

    res.render('mongo/update', { title: 'MongoUpdate' });
};
