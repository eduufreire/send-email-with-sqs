import { User } from "../entities/User";

export default interface IUserRepository {
    save(user: User): Promise<void>
    findByEmail(email: string): Promise<User>
}