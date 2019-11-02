const getRecord = require('../managers/get_one_reccord')

module.exports.get = async(event) =>{
    const resourceId = event.pathParameters.id
    const recordData = await getRecord(resourceId)
    return{
        statusCode: 200,
        body: JSON.stringify(recordData),
    }
}
