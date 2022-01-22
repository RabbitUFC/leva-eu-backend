const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const RidesSchema = new mongoose.Schema({
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
  spots: Number,
  additionalInformation: String,
  routine: Boolean,
  days: [{
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7],
  }],
  duration: Number,
}, {timestamps: true});

RidesSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Rides', RidesSchema);
