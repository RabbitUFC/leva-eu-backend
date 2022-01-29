const Joi = require('@hapi/joi');

exports.RoutinesSchema = Joi.object({
  startLocation: Joi.string().required(),
  endLocation: Joi.string().required(),
  pickupPoints: Joi.array().items(Joi.string()).min(1).required(),
  date: Joi.string().required(),
  passengersAmount: Joi.number().valid(1, 2, 3, 4, 5, 6).required(),
  additionalInformation: Joi.string().required(),
  active: Joi.boolean().required(),
  driver: Joi.string().required(),
  days: Joi.array().items(Joi.number().valid(1, 2, 3, 4, 5, 6, 7)).required(),
  duration: Joi.array().items(Joi.number().valid(1, 4, 16)).required(),
});

exports.RoutinesUpdateSchema = Joi.object({
  startLocation: Joi.string().optional(),
  endLocation: Joi.string().optional(),
  pickupPoints: Joi.array().items(Joi.string()).min(1).optional(),
  date: Joi.string().optional(),
  passengersAmount: Joi.number().valid(1, 2, 3, 4, 5, 6).optional(),
  additionalInformation: Joi.string().optional(),
  active: Joi.boolean().optional(),
  driver: Joi.string().forbidden(),
  days: Joi.array().items(Joi.number().valid(1, 2, 3, 4, 5, 6, 7)).optional(),
  duration: Joi.array().items(Joi.number().valid(1, 4, 16)).optional(),
});
