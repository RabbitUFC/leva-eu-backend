const {StatusCodes} = require('http-status-codes');

const Rides = require('../models/rides');
const RidesRequests = require('../models/rides-requests');
const {responseMessages} = require('../utils/response-messages');
const {rideRequestStatus} = require('../utils/ride-request-status');

exports.create = async (req, res) => {
  try {
    const {ride: rideID, passenger} = req.body;

    const ride = await Rides.findById(rideID);

    if (ride.driver == passenger) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Você não pode ser passageiro da sua própria carona.',
        });
    }

    const rideRequest = await RidesRequests.findOne({ride: rideID, passenger}).lean();

    if (rideRequest) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Você já fez uma solicitação para essa carona. Aguarde.',
        });
    }

    await RidesRequests.create(req.body);

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
      });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: error.toString(),
      });
  }
};

exports.list = async (req, res) => {
  try {
    const {
      ride,
      passenger,
    } = req.query;

    const query = {
      ...(ride && {ride}),
      ...(passenger && {passenger}),
    };

    var data = await RidesRequests
      .find(query, '-__v -createdAt -updatedAt -deleted')
      .populate({
        path: 'ride',
        options: {withDeleted: true},
        populate: {
          path: 'driver startLocation endLocation',
          select: '_id name image',
          options: {withDeleted: true},
        },
      })
      .populate({
        path: 'passenger',
        select: '_id name image',
        options: {withDeleted: true},
      })
      .lean();

    return res.status(StatusCodes.OK).json({success: true, data});
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: err.toString(),
      });
  }
};

exports.retrieve = async (req, res) => {
  try {
    const {id} = req.params;

    const data = await RidesRequests
      .findById(id)
      .populate({
        path: 'ride',
        options: {withDeleted: true},
        populate: {
          path: 'driver startLocation endLocation',
          select: '_id name image',
          options: {withDeleted: true},
        },
      })
      .populate({
        path: 'passenger',
        select: '_id name image',
        options: {withDeleted: true},
      })
      .lean();

    if (!data) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({success: false});
    }

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        data,
      });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: err.toString(),
      });
  }
};

exports.update = async (req, res) => {
  try {
    const {id} = req.params;
    const {status, ride, passenger} = req.body;

    const request = await RidesRequests
      .findOne({ride, passenger})
      .lean();

    if (request && request.status != rideRequestStatus.WAITING_RESPONSE) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          success: false,
          message: 'Você não pode editar uma solicitação depois de aceita ou recusada.',
        });
    }

    await RidesRequests
      .findByIdAndUpdate(id, req.body)
      .lean();

    if (status == rideRequestStatus.ACCEPTED) {
      await Rides.findByIdAndUpdate(
        ride,
        {$push: {passengers: passenger}},
      );
    }

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
      });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: err.toString(),
      });
  }
};

exports.delete = async (req, res) => {
  try {
    const {id: _id} = req.params;
    await RidesRequests.delete({_id});

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
      });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        message: responseMessages.INTERNAL_ERROR,
        error: err.toString(),
      });
  }
};
