const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const friend = new Schema({
    fid:{
        type: Number,
        require: true
    },
    imagePic:
    {
        type: String,
        require: true
    },
    fname:{
        type: String,
        require: true
    },
    bday:{
        type: String,
        require: true
    }

});
module.exports =  mongoose.model('friendInfo', friend);