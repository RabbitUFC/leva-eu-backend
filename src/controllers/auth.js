const {StatusCodes} = require('http-status-codes');
const randomstring = require('randomstring');

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

    if (!user.confirmedAccount) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'A sua conta ainda não foi confirmada.',
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

exports.recoverPassword = async (req, res) => {
  try {
    const {email} = req.body;

    var user = await Users
      .findOne({email})
      .lean();

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Nenhuma conta encontrada com esse e-mail.',
        });
    }

    if (!user.confirmedAccount) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'A sua conta ainda não teve o e-mail confirmado.',
        });
    }

    const code = randomstring.generate({
      length: 6,
      charset: 'numeric',
    });
    user = await Users
      .findByIdAndUpdate(user._id, {code})
      .lean();

    await authUtils.sendRecoverPasswordEmail({
      email,
      code,
    });

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
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

exports.resetPassword = async (req, res) => {
  try {
    const {email, code, password} = req.body;

    var user = await Users
      .findOne({email})
      .lean();

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Nenhuma conta encontrada com esse e-mail.',
        });
    }

    if (code != user.code) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'O código informado é inválido.',
        });
    }

    const hashedPassword = authUtils.hashPassword(password);

    user = await Users
      .findByIdAndUpdate(user._id, {password: hashedPassword})
      .lean();

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
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

exports.confirmAccount = async (req, res) => {
  try {
    const {email, code} = req.body;

    const user = await Users
      .findOne({email})
      .lean();

    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Nenhuma conta encontrada com esse e-mail.',
        });
    }

    if (code != user.code) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'O código informado é inválido.',
        });
    }

    const token = authUtils.generateToken(user._id);

    await Users
      .findByIdAndUpdate(user._id, {confirmedAccount: true, token})
      .lean();

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        token,
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
