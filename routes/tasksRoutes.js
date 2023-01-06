const express = require('express');
const TaskController = require('../controllers/TaskController');

const routes = express.Router();

routes.get('/add', TaskController.createTask)
routes.post('/add', TaskController.insertTask)
routes.get('/', TaskController.showTasks)

module.exports = routes;