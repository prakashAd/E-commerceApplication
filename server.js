//import
const express =require('express')
require ('dotenv').config()
require ('./database/connection')

//middleware
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')


// require('./database/connection')
//routes import
const CategoryRoute = require ('./routes/categoryRoute')
const ProductRoute = require ('./routes/ProductRoute')
const UserRoute = require ('./routes/userRoute')
const OrderRoute =require ('./routes/orderRoute')
const PaymentRoute = require('./routes/paymentRoute')

const app =express()
const port = process.env.PORT || 8000


//middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

//use  routes
app.use('/api',CategoryRoute)
app.use('/api',ProductRoute)
app.use('/api',UserRoute)
app.use('/api',OrderRoute)
app.use('/api',PaymentRoute)

//use static file

app.use('/api/public/uploads',express.static('public/uploads/'))


// app.get ('/hello',(request,response)=>{

//     response.send("hello there")
// })

// app.get("/second",(req,res)=>{
//     res.send("there is second message")
// })

app.listen(port,()=>{
    

    console.log(`server started succesfully at port ${port}`)
})



//multer is used to upload files