const  SliderPostSchema = require('../validations/slider.validation');

const SliderPostMiddleware = (req, res, next) => {
  const { error } = SliderPostSchema.validate(req.body);
  if (error === undefined) {
    next();
  } else {
    const { details } = error;
    console.log(details);
    const message = details.map((i) => i.message).join(",");
    res.send({ message: message });
  }
};

module.exports = SliderPostMiddleware