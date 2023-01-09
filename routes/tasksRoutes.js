const express = require('express');
const TaskController = require('../controllers/TaskController');

const routes = express.Router();

routes.get('/add', TaskController.createTask)
routes.post('/add', TaskController.insertTask)
routes.get('/', TaskController.showTasks)
routes.post('/remove', TaskController.removeTask)
routes.get('/edit/:id', TaskController.getTask)
routes.post('/edit', TaskController.editTask)
routes.post('/updatestatus', TaskController.toogleTaskStatus)

module.exports = routes;