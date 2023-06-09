const Joi = require('joi');

const SliderPostSchema = Joi.object({
    name: Joi.string().required(),
    imageURL: Joi.string().required(),
})

module.exports = SliderPostSchema