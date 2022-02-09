const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const {rideRequestStatus} = require('../utils/ride-request-status');

const RideRequestSchema = new mongoose.Schema({
  ride: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Rides',
  },
  passenger: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Users',
  },
  status: {
    type: String,
    enum: Object.values(rideRequestStatus),
    default: rideRequestStatus.WAITING_RESPONSE,
  },
  rating: Number,
}, {timestamps: true});

RideRequestSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
});

module.exports = mongoose.model('Ride_Request', RideRequestSchema);
