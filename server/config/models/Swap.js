const mongoose = require("mongoose");
const { Schema } = mongoose;

const SwapSchema = new Schema ({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    method: {
        type: String,
        enum: ['swap', 'redeem'],
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected', 'completed'],
        default: 'pending',
    },
    message: {
        type: String,
    },
    requestedAt: {
        type: Date,
        default: Date.now,
    },
    completedAt: {
        type: Date,
    },

});

const Swap = mongoose.model("Swap", SwapSchema);
Swap.createIndexes();
module.exports = Swap;