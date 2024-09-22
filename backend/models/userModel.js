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
