'use strict'

const AWS = require('aws-sdk')

module.exports =  ({ phone_number, message }) => {

  const sns = new AWS.SNS({
    apiVersion: '2010-03-31',
    endpoint: "http://127.0.0.1:4002",
    region: 'us-east-1'
  })

  const params = {
    Message: message,
    PhoneNumber: phone_number
  }

  return sns.publish({
    Message: message,
    PhoneNumber: phone_number
  }).promise()
}


