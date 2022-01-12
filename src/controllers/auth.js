const {StatusCodes} = require('http-status-codes');

const Users = require('../models/users');
const authUtils = require('../utils/auth');
const {responseMessages} = require('../utils/response-messages');

exports.signIn = async (req, res) => {
  try {
    const {email, password} = req.body;

    var user = await Users
      .findOne({email})
      .lean();

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Email ou senha inválidos!',
        });
    }

    const correctCredentials = authUtils.validatePassword({
      savedPassword: user.password,
      informedPassword: password,
    });

    if (!correctCredentials) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Email ou senha inválidos!',
        });
    }

    const token = authUtils.generateToken(user._id);
    user.token = token;
    user = await Users
      .findByIdAndUpdate(user._id, {token})
      .lean();

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        data: {
          ...user,
          token,
          password: undefined,
        },
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
