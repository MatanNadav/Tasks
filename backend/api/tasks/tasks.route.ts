import { Router } from 'express'
import { getTasks, createTask, getTask, deleteTask, updateTask } from './tasks.controller'

const router = Router()



router.get('/task', getTasks)
router.post('/task', createTask)

router.get('/task/:taskId', getTask)
router.delete('/task/:taskId', deleteTask)
router.put('/task/:taskId', updateTask)

export default router

