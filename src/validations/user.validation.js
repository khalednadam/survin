const Joi = require("joi");
const { password, objectId, username } = require("./custome.validation");

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid("admin", "user"),
    username: Joi.string().required().custom(username),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
const getCurrentUser = {
  session: Joi.object().keys({
    user: Joi.object().keys({
      id: Joi.string().required().custom(objectId),
    }),
  }),
};

module.exports = {
  createUser,
  deleteUser,
  getUsers,
  getCurrentUser,
};
