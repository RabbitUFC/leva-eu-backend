const Joi = require('@hapi/joi');

exports.DistrictsSchema = Joi.object({
  name: Joi.string().required(),
});
