function getConnectionString(cxn){
    console.log("cxn: ", "mongodb://"+ cxn.host + ":" + cxn.port + "/" + cxn.name)
    return "mongodb://"+ cxn.host + ":" + cxn.port + "/" + cxn.name
}
module.exports.getConnectionString = getConnectionString