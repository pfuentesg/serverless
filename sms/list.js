const listReccords = require('../managers/list_reccords')
module.exports.list = async() =>{
    console.log('holi list')
    const reccrds = await listReccords()
    return{
        statusCode: 200,
        body: JSON.stringify(reccrds.Items),
    }
    
}