const dynamodb = require('../aws_clients/dynamo')

module.exports= () => {
    return new Promise((resolve, reject) => {
        dynamodb.scan({ TableName: process.env.DYNAMODB_TABLE  }, (error, result) => {
            if (error) reject(error)
            else resolve(result)
          });
    })
 
}