"use strict";
exports.__esModule = true;
exports.verifyToken = void 0;
function verifyToken(req, res, next) {
    var bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        console.log('Inside verifying, inside if');
        var bearer = bearerHeader.split(' ');
        var bearerToken = bearer[1];
        req['token'] = bearerToken;
        next();
    }
    else {
        res.sendStatus(403);
    }
}
exports.verifyToken = verifyToken;
