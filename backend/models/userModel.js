const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: user,
      };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },
  getUser: async ({ userId, username }) => {
    try {
      const users = await models.users.findOne({
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
        // attributes: {
        //   exclude: ["password"],
        // },
      });
      return { response: users };
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  },
  deleteUser: async ({ userId, username }) => {
    try {
      const user = await models.users.destroy({
        where: {
          ...(userId ? { userId: userId } : { username: username }),
        },
      });
      return { response: user };
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  },
  updateUser: async ({ userId, ...body }) => {
    try {
      const user = await models.users.update(
        { ...body },
        {
          where: {
            userId: userId,
          },
        }
      );
      return { response: user };
    } catch (error) {
      console.log(error);
      return res.send({
        error: error,
      });
    }
  },
};
