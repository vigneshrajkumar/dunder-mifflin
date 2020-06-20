const MongoClient = require('mongodb').MongoClient;
const db = require("./../conf/db")
const baseCollections = require("./../conf/collections")
const categories = require("./../conf/categories")
const products = require("./../dump/products")
const uri = require("./../conf/uriBuilder")

console.log("> Reiniting DB");
(async () => {
    const client = new MongoClient(uri.getConnectionString(db), { useNewUrlParser: true });
    try {
        await client.connect();
        await baseCollections.map(async (c) => {
            try {
                await client.db(db.name).dropCollection(c);
            } catch (err) {
                if (err.code == 26) {
                    console.log(c + " not found")
                } else {
                    console.log(err)
                }
            }
        });

        await client.db(db.name).collection('categories').insertMany(categories);
        await client.db(db.name).collection('products').insertMany(products);
    } catch (err) {
        console.log(err)
    }
    client.close();
})();