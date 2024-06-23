export class EmailService {

    static execute(body: any) {
        const payloadMessage = JSON.parse(body)
        console.log(`Email enviado para ${payloadMessage.new_user.email}`)
    }

}