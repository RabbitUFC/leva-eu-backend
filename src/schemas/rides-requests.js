const Joi = require('@hapi/joi');

const {rideRequestStatus} = require('../utils/ride-request-status');

exports.RidesRequestsSchema = Joi.object({
  ride: Joi.string().required(),
  passenger: Joi.string().required(),
  status: Joi.string().forbidden().default(rideRequestStatus.WAITING_RESPONSE),
  rating: Joi.number().forbidden(),
});

exports.RidesRequestsQuerySchema = Joi.object({
  ride: Joi.string().optional(),
  passenger: Joi.string().optional(),
});

exports.RidesRequestsUpdateSchema = Joi.object({
  ride: Joi.string().required(),
  passenger: Joi.string().required(),
  status: Joi.string().optional().valid(...Object.values(rideRequestStatus)).default(rideRequestStatus.WAITING_RESPONSE),
  rating: Joi.number().optional(),
});
