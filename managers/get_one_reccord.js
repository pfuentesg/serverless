const dynamodb = require('../aws_clients/dynamo')

module.exports= (id) => {
    return new Promise((resolve, reject) => {
        dynamodb.get({ TableName: process.env.DYNAMODB_TABLE, Key: {id}  }, (error, result) => {
            if (error) reject(error)
            else resolve(result)
          })
    })
 
}