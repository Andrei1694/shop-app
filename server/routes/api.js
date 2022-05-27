const express = require('express');
const userRoutes = require('./user.routes');

const api = express.Router();

api.use(userRoutes)

module.exports = api;