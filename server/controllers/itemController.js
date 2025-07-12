const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  const images = req.files.map(file => file.path);
  const newItem = new Item({ ...req.body, images, uploader: req.user._id });
  await newItem.save();
  res.json({ msg: 'Item submitted for approval' });
};

exports.getApprovedItems = async (req, res) => {
  const items = await Item.find({ isApproved: true });
  res.json(items);
};

exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id).populate('uploader', 'name email');
  res.json(item);
};