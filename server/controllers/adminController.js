const Item = require('../models/Item');

exports.getPendingItems = async (req, res) => {
  const items = await Item.find({ approved: false });
  res.json(items);
};

exports.approveItem = async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, { approved: true });
  res.json({ message: 'Approved' });
};

exports.rejectItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Rejected' });
};
