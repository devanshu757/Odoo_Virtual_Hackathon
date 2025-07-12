const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
  const items = await Item.find({ approved: true }).populate('uploader', 'email');
  res.json(items);
};

exports.addItem = async (req, res) => {
  const item = await Item.create({ ...req.body, uploader: req.user.id });
  res.json(item);
};
