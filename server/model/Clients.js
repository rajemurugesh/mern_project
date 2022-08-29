const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true,
    },
    nationality: {
        type: String,
        require: true,
    },
    passport_no: {
        type: String,
        require: true,
    },
    emirates_id_no: {
        type: String,
        require: true,
    },
    mobil_no: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
    }


});

module.exports = mongoose.model('Clients' , clientSchema);