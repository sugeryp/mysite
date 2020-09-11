const MongoClient = require('mongodb').MongoClient;

// MongoDB Listener URL
const url = 'mongodb://localhost:27017';

// updatePriceUndigit2Digit main
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
                // convert zenkaku price to hankaku price
                let price = zenkakuNumber2Hankaku(docs.price);
                if (price) {
                    //delete UndigitWord of Price
                    let digitPrice = deleteUnDigitWord(price);
                    console.log({ _id: docs._id});
                    if (docs._id) bulk.find({ _id: docs._id}).updateOne(
                        { $set: { price: digitPrice} }
                    );
                }
            }  
        }
    });
    await bulk.execute();
    client.close();
    console.log("MongoDB Close");
};

let daCollection = process.argv[2];

updatePriceUndigit2Digit(daCollection);