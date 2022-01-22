const Joi = require('@hapi/joi');

exports.RidesSchema = Joi.object({
  goingData: Joi.object({
    district: Joi.string().required(),
    pickupPoints: Joi.array().items(Joi.string()).min(1).required(),
    hour: Joi.string().required(),
  }),
  returnData: Joi.object({
    district: Joi.string().required(),
    pickupPoints: Joi.array().items(Joi.string()).min(1).required(),
    hour: Joi.string().required(),
  }),
  spots: Joi.number().valid(1, 2, 3, 4, 5, 6).required(),
  additionalInformation: Joi.string().required(),
  routine: Joi.boolean().required(),
  days: Joi.array().items(Joi.number().valid(1, 2, 3, 4, 5, 6, 7)).required(),
  duration: Joi.number().required(),
});
