import { Router } from 'express'

import { getUser, createUser, login } from './user.controller'


const router = Router()

router.get('/user/:userId', getUser)
router.post('/user/login', login)
router.post('/user/signup', createUser)

export default router