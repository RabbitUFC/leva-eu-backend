const Joi = require('@hapi/joi');

exports.RidesSchema = Joi.object({
  startLocation: Joi.string().required(),
  endLocation: Joi.string().required(),
  pickupPoints: Joi.array().items(Joi.string()).min(1).required(),
  date: Joi.string().required(),
  passengersAmount: Joi.number().valid(1, 2, 3, 4, 5, 6).required(),
  additionalInformation: Joi.string().required(),
  active: Joi.boolean().required(),
  driver: Joi.string().required(),
  passengers: Joi.array().items(Joi.string()).max(6).required(),
  rating: Joi.number().optional(), // average rating by passengers
});

exports.RidesQuerySchema = Joi.object({
  active: Joi.boolean().default(true).optional(),
  startLocation: Joi.string().optional(),
  endLocation: Joi.string().optional(),
});

exports.RidesUpdateSchema = Joi.object({
  startLocation: Joi.string().optional(),
  endLocation: Joi.string().optional(),
  pickupPoints: Joi.array().items(Joi.string()).min(1).optional(),
  date: Joi.string().optional(),
  passengersAmount: Joi.number().valid(1, 2, 3, 4, 5, 6).optional(),
  additionalInformation: Joi.string().optional(),
  active: Joi.boolean().forbidden(),
  driver: Joi.string().forbidden(),
  passengers: Joi.array().items(Joi.string()).max(6).optional(),
  rating: Joi.number().forbidden(),
});
