const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
