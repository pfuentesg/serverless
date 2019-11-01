const createIndDynamodb = require('../managers/create_record')
module.exports.create = async (event, context) => {
    const timestamp = new Date();
    const data = JSON.parse(event.body);
    if (typeof data.message !== 'string' || typeof data.message !== 'string') {
        callback(null, {
            statusCode: 400,
            headers: {
                'Content-Type': 'text/plain'
            },
            body: 'Couldn\'t create the todo item.',
        });
        return;
    }
    try {
        const createdItem = await createIndDynamodb({
            message: data.message,
            phone_number: data.phone_number
        })
        console.log(createdItem)
        return {
            statusCode: 200,
            body: JSON.stringify(createdItem),
        };
    }catch (err) {
    console.error('Unexpected error creating reccord',  { err })
    return{
        statusCode: 500,
        body: JSON.stringify(err),
    };
}
}
