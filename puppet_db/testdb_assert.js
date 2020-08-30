const MongoClient = require('mongodb').MongoClient;

// MongoDB Listener URL
const url = 'mongodb://localhost:27017';

// test insert

const insertOne = function(req, res){

    //MongoDBの接続
    MongoClient.connect(url, function(err, client) {

        //DBの指定(testdb)
        const db = client.db('puppet_test');

        //登録用ドキュメント
        var document = {name: "comera", price: 30000 , URL: "https://www.lll.jp"};

        //insertOneの実行
        db.collection('test1').insertOne(
            document
        );

        //MongoDBのクローズ
        client.close();
        console.log("MongoDB Close");

	});
};

insertOne();
