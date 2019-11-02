const getReccord = require('../managers/get_one_reccord')

module.exports.get = async(event) =>{
    const resourceId = event.pathParameters.id
    const reccordData = await getReccord(resourceId)
    return{
        statusCode: 200,
        body: JSON.stringify(reccordData),
    } 
}