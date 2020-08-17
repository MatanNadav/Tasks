import { Request, Response, NextFunction } from 'express'


export function verifyToken(req: Request, res: Response, next: NextFunction) {
    next()
    // const bearerHeader = req.headers['authorization']
    // if(bearerHeader) {
    //     console.log('Inside verifying, inside if')
    //     const bearer = bearerHeader.split(' ')
    //     const bearerToken = bearer[1]
    //     req['token'] = bearerToken
    //     next()
    // }
    // else {
    //     res.sendStatus(403)
    // }
}
