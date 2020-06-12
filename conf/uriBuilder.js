function getConnectionString(cxn){
    return "mongodb://"+ cxn.host + ":" + cxn.port + "/" + cxn.db
}
module.exports.getConnectionString = getConnectionString