const Joi = require('@hapi/joi');

const {ImageMimes} = require('../utils/image-mimes');

exports.UsersCreateSchema = Joi.object({
  name: Joi.string().required(),
  imageType: Joi.string().required().valid(...ImageMimes),
  collegeEnrollment: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  userTypePreference: Joi.string().required().valid('driver', 'passanger').default('passanger'),
  gender: Joi.string().required().valid('male', 'female', 'other').default('other'),
  token: Joi.forbidden(),
});

exports.UsersUpdateSchema = Joi.object({
  name: Joi.string().optional(),
  imageType: Joi.string().optional().valid(...ImageMimes),
  email: Joi.string().optional(),
  userTypePreference: Joi.string().optional().valid('driver', 'passanger').default('passanger'),
  gender: Joi.string().optional().valid('male', 'female', 'other').default('other'),
  collegeEnrollment: Joi.forbidden(),
  password: Joi.forbidden(),
  token: Joi.forbidden(),
});
