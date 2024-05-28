import { DatabaseImplementation } from "../../repository/implementations/DatabaseImplementation";
import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { RegisterUserController } from "./RegisterUseController";

const databaseImplementation = new DatabaseImplementation();
const registerUserUseCase = new RegisterUserUseCase(databaseImplementation);
const registerUserController = new RegisterUserController(registerUserUseCase)

export { registerUserController }