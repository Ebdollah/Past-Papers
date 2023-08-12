const mongoose = require('mongoose');
const papersSchema = new mongoose.Schema({
    pname: { type: String, required: true, min: 3, max: 255 },
    pyear: { type: String, required: true, min: 3, max: 255 },
    pimage: { type: String, required: false, min: 3, max: 255 },
    ptype : { type: Date, required:false },
    puniversity : {type : String, required : true, min : 3, max : 255},
    // puniversity : {type : mongoose.Schema.Types.ObjectId, ref : 'University'},
    
});

module.exports = mongoose.model('Papers', papersSchema);

// const itemSchema = new mongoose.Schema({
//     itemName: {
//       type: String,
//       required: true,
//       maxlength: 30
//     }
//   });
//   const ListSchema = new mongoose.Schema({
//     iname : String,
//     item : [itemSchema]
//   })