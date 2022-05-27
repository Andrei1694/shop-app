const express = require('express');
const { path } = require('express/lib/application');
const userRoutes = require('./user.routes');

const api = express.Router();

api.use(userRoutes)

module.exports = api;