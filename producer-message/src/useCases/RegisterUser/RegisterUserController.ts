import { Request, Response } from "express";
import { RegisterUserUseCase } from "./RegisterUserUseCase";
import zod from 'zod'

type RequestPayload = {
    name: string
    email: string
    profileImage: string
}

export class RegisterUserController {

    constructor(
        private registerUserUseCase: RegisterUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const payload: RequestPayload = this.checkRequestBody(request)

        try {
            const result = await this.registerUserUseCase.execute(payload)
            console.log(result)
            return response.status(201).json(result)
        } catch(error) {
            return response.status(error.statusCode).json({
                message: error.message
            })
        }
    }

    private checkRequestBody(request: Request): RequestPayload {
        const checkRequestBody = zod.object({
            name: zod.string().max(30, {message: "Max length name is 30 characters"}),
            email: zod.string().email({message: "Email is invalid"}),
            profileImage: zod.string()
        })

        const bodyRequest = checkRequestBody.safeParse(request.body)

        if(bodyRequest.success){
            return { 
                name: bodyRequest.data.name,
                email: bodyRequest.data.email,
                profileImage: bodyRequest.data.profileImage
            }
        }

        throw new Error(`${bodyRequest.error.issues[0]}`)
    }

}
