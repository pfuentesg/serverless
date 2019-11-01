const createIndDynamodb = require('../managers/create_record')
const sendSms = require('../managers/send_sms')

module.exports.create = async (event, context) => {
    const timestamp = new Date();
    const data = JSON.parse(event.body);
    if (typeof data.message !== 'string' || typeof data.phone_number !== 'string') {
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
        const sentSms = await sendSms({ phone_number: data.phone_number, message: data.message })
        console.log(sentSms)
        const createdItem = await createIndDynamodb({
            message: data.message,
            phone_number: data.phone_number,
            ...sentSms
        })
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
