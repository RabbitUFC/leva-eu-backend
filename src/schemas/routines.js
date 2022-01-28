const Joi = require('@hapi/joi');

exports.RoutinesSchema = Joi.object({
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
  additionalInformation: Joi.string().required(),
  days: Joi.array().items(Joi.number().valid(1, 2, 3, 4, 5, 6, 7)).required(),
  duration: Joi.number(),
  driver: Joi.string().required(),
  passengers: Joi.array().items(Joi.string()).max(6).required(),
});
