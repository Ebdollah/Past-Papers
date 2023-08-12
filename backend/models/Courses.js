const mongoose = require('mongoose');
const coursesSchema = new mongoose.Schema({
    coursename: { type: String, required: true, min: 3, max: 255 },
    coursecode: { type: String, required: true, min: 3, max: 255 },
    coursedept: { type: String, required: false, min: 3, max: 255 },
    courseyear : { type: Date, required:false },
});

module.exports = mongoose.model('Courses', coursesSchema);

