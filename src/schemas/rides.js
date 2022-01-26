const Joi = require('@hapi/joi');

exports.RidesSchema = Joi.object({
  startLocation: Joi.string().required(),
  endLocation: Joi.string().required(),
  pickupPoints: Joi.array().items(Joi.string()).min(1).required(),
  date: Joi.array().items(Joi.number().valid(1, 2, 3, 4, 5, 6, 7)).required(),
  hour: Joi.string().required(),
  spots: Joi.number().valid(1, 2, 3, 4, 5, 6).required(),
  additionalInformation: Joi.string().required(),
  active: Joi.boolean().required(),
});

exports.RidesQuerySchema = Joi.object({
  active: Joi.boolean().default(true).optional(),
  startLocation: Joi.string().default(null).optional(),
  endLocation: Joi.string().default(null).optional(),
});
