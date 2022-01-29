const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const RoutinesSchema = new mongoose.Schema({
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
  days: [{
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7],
  }],
  duration: [{
    type: Number,
    enum: [1, 4, 16],
  }],
}, {timestamps: true});

RoutinesSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Routines', RoutinesSchema);
