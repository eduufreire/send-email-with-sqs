import { User } from "../../entities/User";
import { CustomError } from "../../errors/CustomError";
import IUserRepository from "../../repository/IUserRepository";
import { ServiceMessage, SqsService } from "../../services/sqsService";
import { IRegisterUserRequestDTO } from "./RegisterUserRequestDTO";

export class RegisterUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private serviceMessage: ServiceMessage
    ) {}

    async execute(data: IRegisterUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new CustomError('User already exists', 400)
        }

        const user = new User(data)
        await this.userRepository.save(user)
        await this.serviceMessage.sendMessage({
            new_user: user,
        })

        return user
    }
}
