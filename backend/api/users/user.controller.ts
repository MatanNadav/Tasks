import { Request, Response } from 'express'

import { connect } from '../../services/db.service'

import { User } from '../../interface/User'


export async function getUser(req: Request, res: Response) {
    const id = req.params.userId
    try {
        const conn = await connect()
        const user = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
        res.json(user[0])
    }
    catch(err) {
        throw err
    }
}

export async function createUser(req: Request, res: Response) {
    const newUser: User = req.body
    try {
        const conn = await connect()
        await conn.query('INSERT INTO users SET ?', [newUser]);
        res.json({
            message: "New user created"
        })
    }
    catch(err) {
        throw err
    }
}