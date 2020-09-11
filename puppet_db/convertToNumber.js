const MongoClient = require('mongodb').MongoClient;

// MongoDB Listener URL
const url = 'mongodb://localhost:27017';

// MongoDB update
const updatePriceUndigit2Digit = async (daCollection) => {

    //connect to MongoDB
    const client = await MongoClient.connect(url, 
        { useUnifiedTopology: true }
    );

    //destination of DB
    const db = client.db('puppet_test');

    // execute find
    const collection = db.collection(daCollection);

    //const query = {price: new RegExp("\\D")};
    const queryUnDigit = { price: /\D/ };

    // zenkaku converter
    const zenkakuNumber2Hankaku = (str) => {
        return str.replace(/[０-９]/g, (s) => {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    };

    // UnDigitWord deleter
    const deleteUnDigitWord = (str) => {
        return str.replace(/\D/g, "");
    };

    const bulk = collection.initializeUnorderedBulkOp();

    // find UnDigitWord and convert to digit then, update
    await collection.find(queryUnDigit).forEach((docs) => {
        if (typeof docs == "object") {
            if ("price" in docs) {
                let price = zenkakuNumber2Hankaku(docs.price);
                if (price) {
                    let digitPrice = deleteUnDigitWord(price);
                    //return { _id: ObjectId(docs._id.toHexString()) };
                    //return [{ _id: docs._id}, digitPrice];
                    console.log({ _id: docs._id});
                    //return { _id: docs._id};
                    if (docs._id) bulk.find({ _id: docs._id}).updateOne(
                        { $set: { price: digitPrice} }
                    );
                }
            }  
        }
        else {
            console.log(docs);
        }
    });
    await bulk.execute();
    client.close();
    console.log("MongoDB Close");
};

let daCollection = process.argv[2];

updatePriceUndigit2Digit(daCollection);