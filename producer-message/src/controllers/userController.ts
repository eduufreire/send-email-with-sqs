import { NewUserData, User } from "../interfaces/IUser";
import IUserRepository from "../interfaces/IUserRepository";


export class UserController {

    constructor(private repository: IUserRepository) {}

    async register(newUser: NewUserData) {
        const user: User = this.repository.save(newUser)
        console.log(user)
    }

}