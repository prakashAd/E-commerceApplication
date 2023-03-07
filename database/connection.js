const mongoose = require('mongoose')

mongoose.set("strictQuery",false)
mongoose.connect(process.env.DATABASE).then(
    con=>{
        console.log("Database is connected Successfully")
    }
).catch(err=>{
    console.log(err)
})