import {  v4 as uuid4 } from "uuid";
import moment from 'moment'

export class User {
    public readonly id: string

    public name: string
    public email: string
    public profileImage: string
    public readonly created_at: string

    // estou recendo as propriedades mas pedindo que seja
    // omitido dessas propriedades o id e o created_at
    constructor(props: Omit<User, 'id' | 'created_at'>, id?: string) {

        // estou atribuindo para cada propriedade, o valor passado em prorpss
        // por exemplo this.nome = props.nome
        Object.assign(this, props)

        if(!id){
            this.id = uuid4()
            this.created_at = moment().format('YYYY-MM-DD')
        }
    }
}
