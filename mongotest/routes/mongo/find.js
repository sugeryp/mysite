// MongoDBの設定 ---------------
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// 接続先URL
const url = 'mongodb://localhost:27017';

/*
 * findサンプルプログラム.
 */
exports.find = function(req, res){

    //MongoDBの接続
    MongoClient.connect(url, function(err, client) {

        //接続の確認
        assert.equal(null, err);
        console.log("MongoDB Connect");

        //DBの指定(testdb)
        const db = client.db('testdb');

        //コレクションの指定
        const collection = db.collection('employee');

        //検索条件ドキュメント
        const query = {employeeID: 1};

        // find実行
        collection.find({employeeID: 1})
            .limit(1)
            .each(function(err, docs) {

            if(docs){
                //取得結果の検証
                assert.equal(null, err);

                //コンソールに取得結果を表示
                console.log(docs);

            }
        });

        //MongoDBのクローズ
        client.close();
        console.log("MongoDB Close");

	});

    res.render('mongo/find', { title: 'MongoFind' });
};
