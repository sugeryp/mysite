const MongoClient = require('mongodb').MongoClient;

// MongoDB Listener URL
const url = 'mongodb://localhost:27017';

const addItemId = async (itemCollectionName, salesCollectionName) => {

    const client = await MongoClient.connect(url, 
        { useUnifiedTopology: true }
    );

    const db = client.db('puppet_test');

    const salesCollection = db.collection(salesCollectionName);
    const bulk = salesCollection.initializeUnorderedBulkOp();

    const makeFindQuery = (requirements) => {
        let queryRequirements = 0;
        const findConditions = [];
        if (Number.isInteger(requirements.minPrice)) findConditions.push({ price: {$lte: requirements.minPrice}});
        if (Number.isInteger(requirements.maxPrice)) findConditions.push({ price: {$gte: requirements.maxPrice}});
        if (Array.isArray(requirements.keywords)) {      
            for (value of requirements.keywords) {
                // if keyword is number or string, add condition into query
                if (typeof value == "number" || typeof value == "string") {
                    findConditions.push({ title: new RegExp(value)});

                // if keyword is Or-conditions, make or-query and add or-query into query
                } else if (Array.isArray(value)) {
                    const orConditions = []
                    for (value of value) {
                        if (typeof value == "number" || typeof value == "string") {
                            orConditions.push({ title: new RegExp(value)});
                        // if keyword is And-conditions, make and-query and add And-query into or-query
                        } else if (Array.isArray(value)) {                     
                            const andConditions = [];
                            for (value of value) {
                                if (typeof value == "number" || typeof value == "string") {
                                    andConditions.push({ title: new RegExp(value)});
                                }
                            }
                            if (!(andConditions.length == 0)) orConditions.push({ $and: andConditions});
                        }
                    }
                    if (!(orConditions.length == 0)) findConditions.push({ $or: orConditions});
                }
            }     
        }
        if (!(findConditions.length == 0)) queryRequirements = { $and: findConditions};
        return queryRequirements;
    }

    const getAllItems = async (itemCollectionName) => {
        const itemCollection = db.collection(itemCollectionName);
        const items = [];
        await itemCollection.find().forEach((docs) => {
            if (typeof docs == "object") {
                if ("itemID" in docs && "Requirements" in docs) {
                    items.push(docs);
                }  
            }
        });
        if (!(items.length == 0)) {
            return items
        } else {
            return 0;
        }
    }

    console.log(await getAllItems(itemCollectionName));
    /*
    await itemCollection.find().forEach((docs) => {
        if (typeof docs == "object") {
            if ("itemId" in docs && "requirements" in docs) {
                // convert zenkaku price to hankaku price
                let price = zenkakuNumber2Hankaku(docs.price);
                if (price) {
                    //delete UndigitWord of Price
                    let digitPrice = deleteUnDigitWord(price);
                    // console.log({ _id: docs._id});
                    if (docs._id) bulk.find({ _id: docs._id}).updateOne(
                        { $set: { price: digitPrice} }
                    );
                }
            }  
        }
    });
    */
    //await bulk.execute();
    client.close();
    console.log("MongoDB Close");
};

// for test 
let itemCollection = process.argv[2];
let salesCollection = process.argv[3];
addItemId(itemCollection, salesCollection);