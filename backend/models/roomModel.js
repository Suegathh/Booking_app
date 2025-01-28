const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomsNumbers: {
        type: [{
            number:Number,
            unavailable: [Date]
        }]
    }
})
module.exports = mongoose.model("Room", roomSchema);