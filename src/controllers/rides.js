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
    const {
      active,
      startLocation,
      endLocation,
      pickupPoints,
      startLocationByName,
      endLocationByName,
      driver,
    } = req.query;

    const query = {
      active,
      ...(startLocation && {startLocation}),
      ...(endLocation && {endLocation}),
      ...(driver && {driver}),
      ...(pickupPoints && {
        pickupPoints: {
          $in: pickupPoints.replace(/ /g, '').split(','),
        },
      }),
    };

    var data = await Rides
      .find(query, '-__v -createdAt -updatedAt -deleted')
      .populate({
        path: 'startLocation endLocation',
        select: '_id name',
        options: {withDeleted: true},
      })
      .populate({
        path: 'pickupPoints',
        select: '_id name image',
        options: {withDeleted: true},
      })
      .populate({
        path: 'driver',
        select: '_id name photo rating',
        options: {withDeleted: true},
      })
      .lean();

    if (startLocationByName) {
      data = data.filter((item) => {
        const locationName = item.startLocation.name.toString().toLowerCase();
        const search = startLocationByName.toString().toLowerCase();
        return locationName.includes(search);
      });
    } else if (endLocationByName) {
      data = data.filter((item) => {
        const locationName = item.endLocation.name.toString().toLowerCase();
        const search = endLocationByName.toString().toLowerCase();
        return locationName.includes(search);
      });
    }

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

    const data = await Rides
      .findById(id)
      .populate({
        path: 'startLocation endLocation',
        select: '_id name',
        options: {withDeleted: true},
      })
      .populate({
        path: 'pickupPoints',
        select: '_id name image',
        options: {withDeleted: true},
      })
      .populate({
        path: 'driver',
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
