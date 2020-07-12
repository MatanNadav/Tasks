import { Router } from 'express'

import { getUser, createUser } from './user.controller'

const router = Router()

router.get('/user/:userId', getUser)
router.post('/user', createUser)

export default router