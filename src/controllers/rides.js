const {StatusCodes} = require('http-status-codes');

const Rides = require('../models/rides');
const {responseMessages} = require('../utils/response-messages');

exports.create = async (req, res) => {
  try {
    await Rides.create(req.body);

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
    const {active, startLocation, endLocation} = req.query;

    if (active === null && startLocation === null) {
      const data = await Rides.find({endLocation}, '-__v -createdAt -updatedAt -deleted').lean();
      return res.status(StatusCodes.OK).json({
        success: true,
        data,
      });
    } if (active === null && endLocation === null) {
      const data = await Rides.find({startLocation}, '-__v -createdAt -updatedAt -deleted').lean();
      return res.status(StatusCodes.OK).json({
        success: true,
        data,
      });
    } else {
      const data = await Rides.find({active}, '-__v -createdAt -updatedAt -deleted').lean();
      return res.status(StatusCodes.OK).json({
        success: true,
        data,
      });
    }
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

    const data = await Rides
      .findById(id)
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

    await Rides
      .findByIdAndUpdate(id, req.body)
      .lean();

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
    await Rides.delete({_id});

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
