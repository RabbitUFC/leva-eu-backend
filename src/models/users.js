const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
var uniqueValidator = require('mongoose-unique-validator');

const UsersSchema = new mongoose.Schema({
  name: String,
  photo: String,
  collegeEnrollment: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  token: String,
  code: String,
  confirmedAccount: {
    type: Boolean,
    default: false,
  },
  userTypePreference: {
    type: String,
    enum: ['driver', 'passanger'],
    default: 'passanger',
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'other',
  },
}, {timestamps: true});

UsersSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

UsersSchema.plugin(uniqueValidator, {
  message: 'Já existe um usuário cadastrado com esse email.',
});

module.exports = mongoose.model('Users', UsersSchema);
