import { Router } from 'express'
import morgan from 'morgan'
import userRoutes from './user.routes'

const router = Router()
router.use(morgan("combined"))
router.use('/users', userRoutes)

export default router
