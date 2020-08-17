import { Request, Response } from 'express'

import { connect } from '../../services/db.service'

import { User } from '../../interface/User'

import { secret } from '../../config/config'

import jwt = require('jsonwebtoken')


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

export async function login(req: Request, res: Response) {
    if (!req.body.name) return res.sendStatus(401)
    const user = req.body
    try {
        const conn = await connect()
        const dbUser = await conn.query('SELECT * FROM users WHERE name = ?', [user.name])
        const userFromDB = dbUser[0][0]
        if( !userFromDB || userFromDB.password !== user.password) return res.sendStatus(401) //Authorizong the User in the DB
        jwt.sign( {userFromDB}, secret, { expiresIn: '3m'}, (err, token) => { // Assigning the user with his token for X amount of time
            if (err) res.sendStatus(403)
            res.json({
                token
            })
        })
    }
    catch(err) {
        console.log('Error: problem at login user');
        throw err 
    }
}