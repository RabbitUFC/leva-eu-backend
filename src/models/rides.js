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
  date: [{
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7],
  }],
  hour: Date,
  spots: Number,
  additionalInformation: String,
  active: Boolean,
}, { timestamps: true });

RidesSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Rides', RidesSchema);
