import { Request, Response } from 'express'

import { connect } from '../../services/db.service'

import { Task } from '../../interface/Task'

import { secret } from '../../config/config'

import jwt = require('jsonwebtoken')


export async function getTasks(req: Request, res: Response): Promise<Response | void> {
    const token = req.headers.authorization
    console.log('inside get tasks', token)

    try {
        jwt.verify(token, secret, async (err, data) => {
            console.log('inside token verifying')

            if (err) res.sendStatus(403)
            else {
                const conn = await connect()
                const tasks = await conn.query('SELECT * FROM tasks')
                return res.json(tasks[0])
            }
        })
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
        await conn.query('DELETE FROM tasks WHERE id = ?', [id]);
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