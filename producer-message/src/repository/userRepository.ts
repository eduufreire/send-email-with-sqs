import { NewUserData, User } from "../interfaces/IUser";
import IUserRepository from "../interfaces/IUserRepository";
import {  v4 as uuid4 } from "uuid";

export class UserRepository implements IUserRepository {

    private users: Array<User> = []

    save(newUser: NewUserData): User {
        this.users.push({
            id: uuid4(),
            name: newUser.name,
            email: newUser.email,
            profileImage: newUser.profileImage,
            created_at: '2024-2024-204',
        })
        return this.users[this.users.length - 1]
    }

    getById(id: string): User | undefined {
        return this.users.find(element => {
            element.id == id
        });
    }

    getAll(): Array<User> {
        return this.users
    }

}