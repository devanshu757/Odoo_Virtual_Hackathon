const mongoose = require("mongoose");;
const { Schema } = mongoose;

const ItemSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'swapped', 'pending'],
        default: 'available',
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

const Item = mongoose.model("Item", ItemSchema);
Item.createIndexes();
module.exports = Item;