function getConnectionString(cxn){
    return "mongodb://"+ cxn.host + ":" + cxn.port + "/" + cxn.name
}
module.exports.getConnectionString = getConnectionString