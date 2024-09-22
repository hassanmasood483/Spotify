const {
  createUser,
  deleteUser,
  updateUser,
} = require("../contollers/userController");

const {
  createUserValidate,
  updateUserValidate,
} = require("../validations/userValidation");

var routes = require("express").Router();

routes.post("/create", createUserValidate, createUser);
routes.delete("/deleteUser", deleteUser);
routes.patch("/updateUser", updateUserValidate, updateUser);

module.exports = routes;
