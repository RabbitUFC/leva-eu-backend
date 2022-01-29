const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const RidesSchema = new mongoose.Schema({
  startLocation: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Districts',
  },
  endLocation: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Districts',
  },
  pickupPoints: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Pickup_Points',
  }],
  date: Date,
  passengersAmount: Number,
  additionalInformation: String,
  active: Boolean,
  driver: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Users',
  },
  passengers: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Users',
  }],
  rating: Number,
}, {timestamps: true});

RidesSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Rides', RidesSchema);
