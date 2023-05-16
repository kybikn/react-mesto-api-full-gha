const authRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const validationRules = require('../utils/validationRules');
const { createUser, login, logout } = require('../controllers/users');

// УДАЛИТЬ!!!!!!!!!!!!!
authRouter.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
}); 

authRouter.post('/signup', celebrate({
  body: Joi.object().keys({
    email: validationRules.email,
    password: validationRules.password,
    name: validationRules.nameSignUp,
    about: validationRules.aboutSignUp,
    avatar: validationRules.avatarSignUp,
  }),
}), createUser);

authRouter.post('/signin', celebrate({
  body: Joi.object().keys({
    email: validationRules.email,
    password: validationRules.password,
  }),
}), login);

authRouter.get('/signout', logout);

module.exports = authRouter;
