import { Router } from 'express'
import { registerUserController } from '../useCases/RegisterUser';

const userRoutes = Router();

userRoutes.post('/register', (request, response) => {
    return registerUserController.handle(request, response)
})

export default userRoutes