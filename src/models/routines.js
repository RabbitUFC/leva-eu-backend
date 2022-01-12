const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const RoutinesSchema = new mongoose.Schema({
  goingData: {
    district: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Districts',
    },
    pickupPoints: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Pickup_Points',
    }],
    hour: Date,
  },
  returnData: {
    district: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Districts',
    },
    pickupPoints: [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Pickup_Points',
    }],
    hour: Date,
  },
  additionalInformation: String,
  days: [{
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7],
  }],
  duration: Number,
}, {timestamps: true});

RoutinesSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Routines', RoutinesSchema);
