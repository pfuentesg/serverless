# Serverless sns api 

In this repo you will find an serverless api for sending sms to some number

## REQUIREMENTS

1. You must have installed Nodejs (10.x), download and install it from [heare](https://nodejs.org/en/download/)
2. Install serverless plugin globally (`npm i -g serverless`), or locally, but dont forget the folder /node_modules to your current path
3. Type `npm install` to get alll required dependencies 
4. Local environment:
   1. serverless install serverless-offline-sns, serverless dynamodb install 
   2. `serverless offline start` will start a server on port 3000 with the api
5. AWS deploy:
   1. Login in aws [check how to do it](https://docs.aws.amazon.com/es_es/cli/latest/userguide/cli-chap-configure.html)
   2. If you are using a specific aws profile, deploy it running `serverless deploy  --aws-profile <YOUR_AWESOME_PROFILE>` if not (default profile) `serverless deploy` is enough for you
   3. After some time, you will see the endpoints in your console

## How to secure it 
1. if this api is going to be used under any service hosted on aws (ec2 cluster, other lambdas, a aws beanstalk deployment, ecs cluster...) the best approach will be to remove the api gateway invocation method and, with an iam role, invoke it from the main application
2. if this is going to be used as a public api, aws Cognito is the best solution. Cognito, is aws solution that allow users to login aws via api and get a token that works as an iam role, so we will only allow them to invoke this functions
3. AS we can authorize users with cognito, other option is to use a lambda authorizer, with is another function that "runs inside API Gateway" to manage your api security, an ther we can write another function where we can develop our security concerns (oauth, validate body....)

## TOdo
1. [x] Request to sns
2. [x] handle exceptions
3. [ ] swagger 
5. [x] database (check if local for connection) + remote connection 
