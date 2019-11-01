const uuid = require('uuid')
const dynamodb = require('../aws_clients/dynamo')

module.exports = async({message, phone_number, aws_request_id, aws_message_id, aws_error}) => {
    const timestamp = new Date()
    const params = {
        TableName: process.env.DYNAMODB_TABLE || 'sms api',
        Item: {
            id: uuid.v4(),
            message: message,
            phone_number: phone_number,
            aws_request_id,
            aws_error,
            checked: false,
            createdAt: timestamp,
            updatedAt: timestamp,
        }
   };
    return new Promise((resolve, reject) => {
        dynamodb.put(params, function(err, data) {
            if (err) reject(err); // an error occurred
            else resolve(params);           // successful response
        
          });  
    })

}
