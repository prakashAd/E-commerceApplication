const mongoose = require('mongoose')
const {ObjectId}= mongoose.Schema

const  tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User",
        required : true
    },
    createdAt: {
        type: Date,
        default :Date.now(), //no of mili seconds 
        expires:86400  //when will token expires

    }
})
module.exports = mongoose.model("Token",tokenSchema)