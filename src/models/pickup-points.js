const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const PickupPointsSchema = new mongoose.Schema({
  name: String,
  district: String,
  image: String,
}, {timestamps: true});

PickupPointsSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Pickup_Points', PickupPointsSchema);
