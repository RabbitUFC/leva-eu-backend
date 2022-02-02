const Joi = require('@hapi/joi');

const {ImageMimes} = require('../utils/image-mimes');

exports.PickupPointCreateSchema = Joi.object({
  name: Joi.string().required(),
  district: Joi.string().required(),
  imageType: Joi.string().required().valid(...ImageMimes),
});

exports.PickupPointUpdateSchema = Joi.object({
  name: Joi.string().optional(),
  district: Joi.string().optional(),
  imageType: Joi.string().optional().valid(...ImageMimes),
});

exports.PickupPointQuerySchema = Joi.object({
  search: Joi.string().optional(),
});
