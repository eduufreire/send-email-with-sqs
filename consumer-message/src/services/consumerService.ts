import { Consumer } from 'sqs-consumer'
import 'dotenv/config'

import AWS from 'aws-sdk'
import { EmailService } from './emailService'
AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const consumerSQS = Consumer.create({
    queueUrl: process.env.QUEUE_URL,
    handleMessage: async (message) => {
        EmailService.execute(message.Body)
    },
    sqs: new AWS.SQS()
})

consumerSQS.on('error', (err) => {
    console.log(err.message)
})

consumerSQS.on('processing_error', (err) => {
    console.error(err.message);
});

consumerSQS.on('timeout_error', (err) => {
    console.error(err.message);
});

consumerSQS.start()