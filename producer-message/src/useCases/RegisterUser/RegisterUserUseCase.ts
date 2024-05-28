import { User } from "../../entities/User";
import IUserRepository from "../../repository/IUserRepository";
import { IRegisterUserRequestDTO } from "./RegisterUserRequestDTO";

export class RegisterUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute(data: IRegisterUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new Error('User already exists')
        }

        const user = new User(data)

        await this.userRepository.save(user)
    }
}
