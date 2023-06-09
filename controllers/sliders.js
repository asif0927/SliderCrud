const SliderModel = require('../models/slider.model');
const SliderController={
    getAll: async (req, res) => {
        const { name } = req.query;
        const sliders = await SliderModel.find();
        if (!name) {
          res.status(200).send(sliders);
        } else {
          const searchedSliders = sliders.filter((x) =>
            x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
          );
          res.status(200).send(searchedSliders);
        }
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        const slider = await SliderModel.findById(id);
        res.status(200).send(slider);
    },
    delete: async (req, res) => {
        const id = req.params.id;
        //delete
        const deleteSlider = await SliderModel.findByIdAndDelete(id);
        res.status(203).send({
          message: `${deleteSlider.name} deleted successfully!`,
        });
    },
    post: async (req, res) => {
        const { name,imageURL } = req.body;
        const newSlider = new SliderModel({
          name: name,
          imageURL: imageURL,
        });
        await newSlider.save();
        res.status(201).send({
          message: `${newSlider.name} posted successfully`,
          payload: newSlider,
        });
    },
    edit: async(req, res) => {
        const id = req.params.id;
        const { name, imageURL } = req.body;
        const updatingSlider = {name:name,imageURL:imageURL};
        await SliderModel.findByIdAndUpdate(id,updatingSlider);
        res.status(200).send(`${updatingSlider.name} updated successfully!`);
      }
}
module.exports = SliderController;