const MongoClient = require('mongodb').MongoClient;

// MongoDB Listener URL
const url = 'mongodb://localhost:27017';

// compairePrice main
const compairePrice = async (salesCollectionName, itemID) => {

    const client = await MongoClient.connect(url, 
        { useUnifiedTopology: true }
    );

    const db = client.db('puppet_test');

    const collection = db.collection(salesCollectionName);

    //aggregate query to make collection sales items are sorted by price low to high, and make new collection
    const queryCheapest = [
        {$match : {itemID:{$all:[Number(itemID)]}}},
        {$sort: {price: 1}},
        {$out: `cheap_sales_itemID_${itemID}`}
    ];

    await collection.aggregate(queryCheapest)
    client.close();
    console.log("MongoDB Close");
};


// for test 
let salesCollection = process.argv[2];
let itemID = process.argv[3];
compairePrice(salesCollection, itemID)