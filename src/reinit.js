const MongoClient = require('mongodb').MongoClient;
const db = require("./../conf/db")
const baseCollections = require("./../conf/collections")
const categories = require("./../dump/categories")
const products = require("./../dump/products")
const stores = require("./../dump/stores")
const users = require("./../dump/users")
const uri = require("./../conf/uriBuilder")

console.log("> Reiniting DB");
(async () => {
    const client = new MongoClient( process.env.MDB_CXN || uri.getConnectionString(db), { useNewUrlParser: true });
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

        
        // console.log(categories);
        await client.db(db.name).collection('categories').insertMany(categories);
        await client.db(db.name).collection('products').insertMany(products);
        await client.db(db.name).collection('stores').insertMany(stores);
        await client.db(db.name).collection('users').insertMany(users);
    } catch (err) {
        console.log(err)
    }
    client.close();
})();