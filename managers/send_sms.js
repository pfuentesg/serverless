const publishToSns = require('../aws_clients/publish_sms')
module.exports = async({ phone_number, message }) => {
try{
    const publishedMessage = await publishToSns({message, phone_number})
    return Promise.resolve({
        status: 'SUCCESS',
        aws_request_id : publishedMessage.ResponseMetadata.RequestId,
        aws_message_id: publishedMessage.MessageId
    })
} catch(err) {
    return Promise.resolve({
        status: 'ERROR',
        aws_error: err.toString()
    })
}
}