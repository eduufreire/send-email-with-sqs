import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs'

export class SqsService {

    private client = new SQSClient({region: 'us-east-2'})

    async sendMessage(body: any) {

        const input = {
            QueueUrl: "",
            MessageBody: JSON.stringify(body)
        }

        const command = new SendMessageCommand(input)
        const response = this.client.send(command)

        return response
    }

}




