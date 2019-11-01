 
'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies


// connect to local DB if running offline
 const options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  }

const client = new AWS.DynamoDB.DocumentClient(options)

module.exports = client