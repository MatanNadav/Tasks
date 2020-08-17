"use strict";
exports.__esModule = true;
exports.verifyToken = void 0;
function verifyToken(req, res, next) {
    next();
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
exports.verifyToken = verifyToken;
