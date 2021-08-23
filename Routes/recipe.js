const express = require('express');
const route = express.Router();
const controller = require('../Controllers/recipeController');


route.get('/', controller.getAll);

module.exports = route;