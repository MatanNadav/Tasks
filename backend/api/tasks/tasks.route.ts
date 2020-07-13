import { Router } from 'express'
import { getTasks, createTask, getTask, deleteTask, updateTask } from './tasks.controller'

const router = Router()



router.get('/task', getTasks)
router.post('/task', createTask)

router.get('/task/:id', getTask)
router.delete('/task', deleteTask)
router.put('/task', updateTask)

export default router

