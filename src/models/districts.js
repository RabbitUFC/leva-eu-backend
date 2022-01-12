const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const DistrictsSchema = new mongoose.Schema({
  name: String,
}, {timestamps: true});

DistrictsSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Districts', DistrictsSchema);
