const { response } = require('express');
var jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/env');

const fetchuser = (req, res, next) => {

    //Get user from the jwt token and add id to req object
    const token = req.header('auth-token')

    if (!token) {
        response.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();

    } catch (error) {
        response.status(401).send({ error: "Please authenticate using a valid token" });

    }

}

module.exports = fetchuser;