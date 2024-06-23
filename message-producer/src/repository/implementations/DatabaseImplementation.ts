import { User } from "../../entities/User";
import userRoutes from "../../routes/user.routes";
import IUserRepository from "../IUserRepository";

export class DatabaseImplementation implements IUserRepository {
    private users: Array<User> = []

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email == email)
        return user
    }
    
    async save(user: User): Promise<void> {
        this.users.push(user)
    }
}