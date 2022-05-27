const express = require('express');
const userRoutes = express.Router();

userRoutes.get('/user', (req, res) => {
    res.send({
        data: {
            ceva: 1
        }
    });
});

module.exports = userRoutes;