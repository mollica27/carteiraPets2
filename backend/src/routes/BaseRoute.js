const { Router } = require('express');
const route = Router();

const loginController = require('../controllers/LoginController');

//Rotas de login
route.get('/login/index', loginController.index);

module.exports = route;

