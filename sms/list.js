const listReccords = require('../managers/list_reccords')
module.exports.list = async() =>{
    const reccrds = await listReccords()
    return{
        statusCode: 200,
        body: JSON.stringify(reccrds.Items),
    }
    
}