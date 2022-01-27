const {StatusCodes} = require('http-status-codes');
const randomstring = require('randomstring');

const {uploadImage} = require('../common/s3');
const Users = require('../models/users');
const authUtils = require('../utils/auth');
const {responseMessages} = require('../utils/response-messages');
const {S3_FOLDERS} = require('../utils/s3-folders');

exports.create = async (req, res) => {
  try {
    const {imageType, email, password} = req.body;
    var photo, putURL;

    var _user = await Users
      .findOne({email})
      .lean();

    if (_user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Já existe um usuário com esse email.',
        });
    }

    if (imageType) {
      const {getUrl, putUrl} = uploadImage(S3_FOLDERS.users, imageType);
      photo = getUrl;
      putURL = putUrl;
    }

    const hashedPassword = authUtils.hashPassword(password);

    const user = await Users.create({
      ...req.body,
      ...(photo && {photo}),
      password: hashedPassword,
      imageType: undefined,
    });

    const code = randomstring.generate({
      length: 6,
      charset: 'numeric',
    });
    user.code = code;
    await user.save();

    await authUtils.sendConfirmationEmail({
      email: user.email,
      code,
    });

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        putUrl: putURL,
      });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: error.toString(),
      });
  }
};

exports.list = async (req, res) => {
  try {
    const data = await Users
      .find({}, '-__v -createdAt -updatedAt -deleted')
      .lean();

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        data,
      });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: err.toString(),
      });
  }
};

exports.retrieve = async (req, res) => {
  try {
    const {id} = req.params;

    const data = await Users
      .findById(id)
      .lean();

    if (!data) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({success: false});
    }

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        data,
      });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: err.toString(),
      });
  }
};

exports.update = async (req, res) => {
  try {
    const {id} = req.params;
    const {imageType} = req.body;
    var photo, response;

    if (imageType) {
      const {getUrl, putUrl} = uploadImage(S3_FOLDERS.users, imageType);
      photo = getUrl;
      response = putUrl;
    }

    await Users
      .findByIdAndUpdate(id, {
        ...req.body,
        ...(photo && {photo}),
        imageType: undefined,
      })
      .lean();

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        putUrl: response,
      });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: err.toString(),
      });
  }
};

exports.delete = async (req, res) => {
  try {
    const {id: _id} = req.params;
    await Users.delete({_id});

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
      });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: err.toString(),
      });
  }
};
