const mongoose = require('mongoose');

const aerobicSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    time: Number
});

module.exports = mongoose.model('Aerobic', aerobicSchema);