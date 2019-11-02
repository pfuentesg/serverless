const createIndDynamodb = require('../managers/create_record')
const sendSms = require('../managers/send_sms')

module.exports.create = async (event) => {
    const data = JSON.parse(event.body)
    if (typeof data.message !== 'string' || typeof data.phone_number !== 'string') {
        return {
            statusCode: 400,
            body: 'Validation failed: body should contain message and phone number',
        }

    }
    try {
        const sentSms = await sendSms({ phone_number: data.phone_number, message: data.message })
        const createdItem = await createIndDynamodb({
            message: data.message,
            phone_number: data.phone_number,
            ...sentSms
        })
        return {
            statusCode: 200,
            body: JSON.stringify(createdItem),
        }
    } catch (err) {
        console.error('Unexpected error creating record', { err })
    return{
        statusCode: 500,
        body: JSON.stringify(err),
    }
}
}
