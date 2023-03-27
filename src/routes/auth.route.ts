import { Router, Request, Responce } from 'express'
import { login, registration } from '../controllers/auth.controller'

const router = Router()

router.post('/auth/registration', registration)

router.post('/auth/login', login)

export default router
