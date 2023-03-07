const mongoose = require('mongoose')

// Set strictQuery to true

const categorySchema = new mongoose.Schema({

    category_name:{
        type: String,
        required:true,
        trim:true
    },
},{timestamps:true})

module.exports =mongoose.model("Category",categorySchema)