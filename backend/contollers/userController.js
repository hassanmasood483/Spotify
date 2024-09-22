const { createUser, deleteUser, updateUser } = require("../models/userModel");

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
};
