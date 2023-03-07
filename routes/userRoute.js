const express = require ('express')

const {register, verifyEmail, resendVerification, forgetpassword, resetPassword, userDetails, userDetails1, updateUser,signIn,signOut, getUserList, deleteAll} = require('../controller/userController')
const { userCheck, validate } = require('../controller/validation')

const router =express.Router()
router.post('/register',userCheck,validate,register)
router.get('/verifyEmail/:token',verifyEmail)
router.post('/resendVerification',resendVerification)
router.post('/forgetpassword',forgetpassword)
router.post('/resetpassword/:token',resetPassword)
router.get('/getUserList',getUserList)
router.get('/userDetails/:id',userDetails)
router.get('/userDetails1',userDetails1)
router.put('/updateUser/:id',updateUser)
router.delete('/user',deleteAll)
router.post('/signin',signIn)
router.get('/signout',signOut)

module.exports =router