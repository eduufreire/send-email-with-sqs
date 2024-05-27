import { User, NewUserData } from "./IUser";

export default interface IUserRepository {
    save(newUser: NewUserData): User
    getById(id: string): User | undefined
}