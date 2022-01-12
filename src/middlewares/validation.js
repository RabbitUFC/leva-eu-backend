exports.validation = (schema = {}, field = 'body') => {
  return (req, res, next) => {
    const result = schema.validate(req[field], {abortEarly: false, presence: 'required'});
    if (result.error) {
      const details = result.error.details.map(d => d.message);

      return res
        .status(400)
        .json({
          success: false,
          details,
        });
    }
    req[field] = result.value || req[field];
    next();
  };
};
