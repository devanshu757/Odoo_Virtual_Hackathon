const Item = require('../models/Item');

// getPendingItems
exports.getPendingItems = async (req, res) => {
  try {
    const items = await Item.find({ status: 'pending' });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching pending items' });
  }
};

// approveItem
exports.approveItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Error approving item' });
  }
};

// rejectItem
exports.rejectItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item rejected and deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error rejecting item' });
  }
};
