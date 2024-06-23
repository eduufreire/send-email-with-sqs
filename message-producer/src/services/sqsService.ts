import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs'
import 'dotenv/config'

export interface ServiceMessage{
    sendMessage(body: any): Promise<void>
}

export class SqsService implements ServiceMessage {

    private client = new SQSClient({
        region: process.env.AWS_DEFAULT_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
    })

    async sendMessage(body: any): Promise<void> {
        const input = {
            QueueUrl: process.env.QUEUE_URL,
            MessageBody: JSON.stringify(body)
        }

        const command = new SendMessageCommand(input)
        try{
            this.client.send(command)
        }catch(e){
            console.log(e)
        }
    }

}
