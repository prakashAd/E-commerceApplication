const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


// to pass stripe keyt to front end

exports.sendStripeKey =(req,res)=>{

    res.send({
        success:true,
    stripeAPIKey: process.env.STRIPE_API_KEY 
   })
}

//to proceed payment

exports.processPayment = async(req,res)=>{
    const myPaymentIntents = await stripe.paymentIntents.create({

        amount:req.body.amount,
        currency: 'npr',
        metadata: {integration_check:"accept_a_payment"}
    })
    res.send({

        success:true,
        client_secret: myPaymentIntents.client_secret
    })
}