const mongoose = require('mongoose');

const swapSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  responder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  itemRequested: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  itemOffered: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  status: { type: String, enum: ['pending', 'completed', 'declined'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Swap', swapSchema);
