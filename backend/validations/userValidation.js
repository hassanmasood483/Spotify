const joi = require("joi");

module.exports = {
  createUserValidate: async (req, res, next) => {
    const checkUserValidation = joi.object({
      username: joi.string().min(3).max(34).required(),
      password: joi
        .string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    try {
      await checkUserValidation.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  updateUserValidate: async (req, res, next) => {
    const update = joi.object({
      username: joi.string().min(3).max(34),
      userId: joi.string(),
    });
    try {
      await update.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
