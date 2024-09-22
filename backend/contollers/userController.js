const {
  createUser,
  deleteUser,
  updateUser,
  getUser,
} = require("../models/userModel");
const responseHandler = require("../ResponseHandler");

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await createUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const users = await deleteUser(req.query);
      responseHandler(users, res);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await updateUser(req.body);
      responseHandler(user, res);
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await getUser(req.query);
      responseHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
