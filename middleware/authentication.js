
const {UnauthenticatedError} = require('../errors');
const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authentication Invalid');
    }

    const token = authHeader.split(' ')[1];

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {userId: payload.userId, name: payload.name};
        next();
    } catch(err) {
        throw new UnauthenticatedError('Authentication Invalid');
    }
}

module.exports = authMiddleware;