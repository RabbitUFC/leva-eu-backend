const {StatusCodes} = require('http-status-codes');

const Routines = require('../models/routines');
const {responseMessages} = require('../utils/response-messages');

exports.create = async (req, res) => {
  try {
    await Routines.create(req.body);

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
    const data = await Routines
      .find({}, '-__v -createdAt -updatedAt -deleted')
      .populate({
        path: 'district pickup-points',
        select: '_id name image',
        options: {withDeleted: true},
      })
      .populate({
        path: 'users',
        select: '_id name photo rating',
        options: {withDeleted: true},
      })
      .lean();

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

exports.retrieve = async (req, res) => {
  try {
    const {id} = req.params;

    const data = await Routines
      .findById(id)
      .populate({
        path: 'district pickup-points',
        select: '_id name image',
        options: {withDeleted: true},
      })
      .populate({
        path: 'users',
        select: '_id name photo rating',
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

    await Routines
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
    await Routines.delete({_id});

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
