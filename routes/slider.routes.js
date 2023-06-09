const express = require('express');
const slider_router = express.Router();
const SliderController= require('../controllers/sliders')
const SliderPostMiddleware = require('../middlewares/slider.middleware');

slider_router.get('/',SliderController.getAll);

slider_router.get('/:id', SliderController.getOne);

slider_router.delete('/:id',SliderController.delete);

slider_router.post('/',SliderPostMiddleware,SliderController.post);

slider_router.put('/:id',SliderController.edit);

module.exports = slider_router;