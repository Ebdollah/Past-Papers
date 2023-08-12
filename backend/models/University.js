const mongoose = require('mongoose');
const universitySchema = new mongoose.Schema({
    name: { type: String, required: true, min: 3, max: 255 },
    country: { type: String, required: true, min: 3, max: 255 },
    website: { type: String, required: false, min: 3, max: 255 },
    date : { type: Date, default: Date.now },
});

module.exports = mongoose.model('University', universitySchema);
