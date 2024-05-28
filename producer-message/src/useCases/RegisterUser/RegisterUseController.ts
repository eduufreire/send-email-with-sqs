import { Request, Response } from "express";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

export class RegisterUserController {

    constructor(
        private registerUserUseCase: RegisterUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, profileImage } = request.body

        try {
            await this.registerUserUseCase.execute({
                name, email, profileImage
            })
            return response.status(201).send()
        } catch(error) {
            return response.status(400).json({
                message: error.message
            })
        }
        
    }

}