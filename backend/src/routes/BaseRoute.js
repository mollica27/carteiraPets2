const { Router } = require('express');
const route = Router();

const loginController = require('../controllers/LoginController');
const userController = require('../controllers/UserController');

//Rotas de login
route.get('/login/index', loginController.index);

//Rotas de User
route.get('/user', userController.user);

module.exports = route;

