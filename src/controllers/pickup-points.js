const {StatusCodes} = require('http-status-codes');

const {uploadImage} = require('../common/s3');
const PickupPoints = require('../models/pickup-points');
const {responseMessages} = require('../utils/response-messages');
const {S3_FOLDERS} = require('../utils/s3-folders');

exports.create = async (req, res) => {
  try {
    const {imageType} = req.body;
    var image, putURL;

    if (imageType) {
      const {getUrl, putUrl} = uploadImage(S3_FOLDERS.pickupPoints, imageType);
      image = getUrl;
      putURL = putUrl;
    }

    await PickupPoints.create({
      ...req.body,
      ...(image && {image}),
      imageType: undefined,
    });

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        putUrl: putURL,
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
    const data = await PickupPoints
      .find({}, '-__v -createdAt -updatedAt -deleted')
      .populate({
        path: 'district',
        select: '_id name',
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

    const data = await PickupPoints
      .findById(id)
      .populate({
        path: 'district',
        select: '_id name',
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
    const {imageType} = req.body;
    var image, response;

    if (imageType) {
      const {getUrl, putUrl} = uploadImage(S3_FOLDERS.pickupPoints, imageType);
      image = getUrl;
      response = putUrl;
    }

    await PickupPoints
      .findByIdAndUpdate(id, {
        ...req.body,
        ...(image && {image}),
        imageType: undefined,
      })
      .lean();

    return res
      .status(StatusCodes.OK)
      .json({
        success: true,
        putUrl: response,
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
    await PickupPoints.delete({_id});

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
