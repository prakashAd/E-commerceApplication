const express = require ('express')
const { placeOrder, getAllOrders, getOrderDetails, getUserOrders, updateOrder, deleteOrder } = require('../controller/orderController')
const { requireSignin } = require('../controller/userController')
const router = express.Router()

router.post ('/placeorder', requireSignin,placeOrder)

router.get ('/getallorders',getAllOrders)
router.get('/orderdetails/:id',getOrderDetails)
router.get('/getuserorders/:userid',getUserOrders)
router.put('/updateorder/:orderid',updateOrder)
router.delete('/deleteorder/:orderid',deleteOrder)

module.exports = router