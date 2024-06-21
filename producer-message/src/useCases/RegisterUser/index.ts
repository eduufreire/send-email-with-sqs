import { DatabaseImplementation } from "../../repository/implementations/DatabaseImplementation";
import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { RegisterUserController } from "./RegisterUserController";
import { SqsService } from "../../services/sqsService";

const sqsService = new SqsService()
const databaseImplementation = new DatabaseImplementation();
const registerUserUseCase = new RegisterUserUseCase(databaseImplementation, sqsService);
const registerUserController = new RegisterUserController(registerUserUseCase)

export { registerUserController }