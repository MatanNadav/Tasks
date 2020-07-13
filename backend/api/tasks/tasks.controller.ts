import { Request, Response } from 'express'

import { connect } from '../../services/db.service'

import { Task } from '../../interface/Task'


export async function getTasks(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect()
        const tasks = await conn.query('SELECT * FROM tasks')
        return res.json(tasks[0])
    }
    catch(err) {
        throw err
    }
}

export async function createTask(req: Request, res: Response) {
    const newTask: Task = req.body.task
    
    try {
        const conn = await connect()
        await conn.query('INSERT INTO tasks SET ?', [newTask]);
        res.json({
            message: "New task created"
        })
    }
    catch(err) {
        throw err
    }
}

export async function getTask(req: Request, res: Response) {
    const id = req.params.taskId
    try {
        const conn = await connect()
        const task = await conn.query('SELECT * FROM tasks WHERE id = ?', [id]);
        res.json(task[0])
    }
    catch(err) {
        throw err
    }
}

export async function deleteTask(req: Request, res: Response) {
    const id = req.query.q
    
    try {
        const conn = await connect()
        await conn.query('DELETE FROM heroku_4fca849545158fb.tasks WHERE id = ?', [id]);
        res.json({
            message: "Task deleted"
        })
    }
    catch(err) {
        throw err
    }
}

export async function updateTask(req: Request, res: Response) {
    const updatedTask: Task = req.body.task
    const id = req.body.task.id
    
    try {
        const conn = await connect()
        await conn.query('UPDATE tasks SET title = ?, is_finished = ? WHERE id = ?',[updatedTask.title, updatedTask.is_finished, id]);
        res.json({
            message: 'Task Updated'
        });
    }
    catch(err) {
        throw err
    }
}