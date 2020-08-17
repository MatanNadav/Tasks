import { Router } from 'express'
import { getTasks, createTask, getTask, deleteTask, updateTask } from './tasks.controller'
import { verifyToken } from '../../middleware/verify'


const router = Router()



router.get('/task', verifyToken, getTasks)
router.post('/task', verifyToken, createTask)

router.get('/task/:id', verifyToken,  getTask)
router.delete('/task', verifyToken,  deleteTask)
router.put('/task',verifyToken, updateTask)

export default router

