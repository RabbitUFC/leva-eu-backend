const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {sendEmail} = require('../common/email');
const {firstAccessTemplate} = require('../common/email-templates/first-access-template');
const {recoverPasswordTemplate} = require('../common/email-templates/recover-password');
const {jwtSecret} = require('../config');

const ONE_DAY_IN_SECONDS = 86400;

exports.generateToken = (userID) => {
  const token = jwt.sign({userID}, jwtSecret, {
    expiresIn: ONE_DAY_IN_SECONDS * 7,
  });

  return token;
};

exports.validatePassword = ({savedPassword, informedPassword}) => {
  return bcrypt.compareSync(informedPassword, savedPassword);
};

exports.hashPassword = (password) => {
  const hashedPassword = bcrypt.hashSync(password, 10);

  return hashedPassword;
};

exports.sendConfirmationEmail = async ({email, code}) => {
  var html = firstAccessTemplate(code);
  await sendEmail({
    html,
    to: email,
    subject: 'LevaEu - Confirmação de Cadastro',
  });
};

exports.sendRecoverPasswordEmail = async ({email, code}) => {
  var html = recoverPasswordTemplate(code);
  await sendEmail({
    html,
    to: email,
    subject: 'LevaEu - Recuperar senha',
  });
};
