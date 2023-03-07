const {check,validationResult} = require('express-validator')


exports. categoryCheck = [
    check('category_name','category name is required').notEmpty()
    .isLength({min:3}).withMessage("Category name must be at least 3 characters")
]


exports.validate = (req,res,next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()[0].msg})
        }
        next()
}

exports.productCheck = [
    
    check('product_name','product name is required').notEmpty()
    .isLength({min:3}).withMessage("product name must be at least 3 charecters").isLength({max:20}).withMessage("must not be nore than 10 charecters"),

    check('product_price','Price is required').notEmpty()
    .isNumeric().withMessage("price must be a number"),

    check('product_description','Description is required').notEmpty()
    .isLength({min:20}).withMessage("Description must be at least 20 chatacters"),

    check('category','category is required').notEmpty(),

    check('product_in_stock','Product  in  stock is required').notEmpty()
    .isNumeric().withMessage("Product must be a number")

]

exports.userCheck=[
check('username','username is required').notEmpty().isLength({min:3}).withMessage("Username must be at least 3 chareacters"),
check('email','Email is required').notEmpty().isEmail().withMessage("Email format is incorrect"),


check('password','Password is required').notEmpty().isLength({min:3}).withMessage("Password must be at least 3 characters")
.not().isIn((['asdf1234',/"password"/i,'12345678'])).withMessage("Cannot use common words")
.matches(/[a-z]/).withMessage("password must contain at least one lower case charecter")
.matches(/[A-Z]/).withMessage("password must contain at least one upper case charecter")
.matches(/[0-9]/).withMessage("password must contain at least one number")
.matches(/[-_+!@#$%]/).withMessage("password must contain at least one special charecter")
.not().matches(/[\\;:.,]/).withMessage("cannot use these ")


]
