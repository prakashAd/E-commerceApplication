const express  = require('express')
const {sendStripeKey,processPayment}= require('../controller/paymentController')
const router = express.Router()

router.get('/getStripeKey',sendStripeKey)
router.post('/processpayment',processPayment)
   
  module.exports = router
