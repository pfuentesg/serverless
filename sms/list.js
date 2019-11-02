const listRecords = require('../managers/list_reccords')
module.exports.list = async() =>{
    const records = await listRecords()
    return{
        statusCode: 200,
        body: JSON.stringify(records.Items),
    }

}
