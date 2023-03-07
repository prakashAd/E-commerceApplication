const Product = require('../model/productModel')

// to add new product


exports.addProduct = async(req,res) =>{

    if(!req.file){
        return res.status(400).json({error:"File cannot uplaod"})
    }

    let productToAdd = new Product({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        product_image:req.file.path,
        product_in_stock:req.body.product_in_stock,
        category:req.body.category
    })

    productToAdd =await productToAdd.save()
    if(!productToAdd){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(productToAdd)
}

// to view  product details
exports.productDetails = async (req,res)=>{

    let product = await Product.findById(req.params.id).populate
    ('category','category_name').sort([['createdAt','desc']])
    //.limit(3)

    if(!product){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(product)
}

//to get product  of same category
exports.productByCategory = async (req,res)=>{

    let product = await Product.find({category:req.params.category_id})

    if(!product){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(product)
}


// to delete product
exports.deleteProduct =async (req,res)=>{
    try{
     let productToDelete= await Product.findByIdAndRemove(req.params.id)
     if(!productToDelete){
        return res.status(400).json({error:"category not found"})
     }
     res.status(200).json({msg:"category deleted succesfully"})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

// get all products
exports.getAllProducts = async (req,res)=>{
    let products  = await Product.find().populate('category','category_name').sort([['createdAt','desc']])
    //.limit(3)
    if(!products){
        return res.status(400).json
({error:"something went wrong"})

    }
    res.send(products)
}


//to update product//

exports.updateProduct = async (req,res)=>{
    let productToUpdate = await Product.findByIdAndUpdate(req.params.id, req.file?
        {
            product_name:req.body.product_name,
            product_price:req.body.product_price,
            product_description:req.body.product_description,
            product_image:req.file.path,
            product_in_stock:req.body.product_in_stock,
            category:req.body.category,
            rating:req.body.rating

        }:
{
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        product_description:req.body.product_description,
        product_in_stock:req.body.product_in_stock,
        category:req.body.category,
        rating:req.body.rating
    },{new:true})

    if(!productToUpdate){
        return res.status(400).json({error:"Something went Wrong"})
    }

    res.send(productToUpdate)
}





//to get product list of particular category

// exports.getProductsByCategory = async (req,res) => {
//     let products  = await Product.find({category:req.params.id})
//     if(!products){
//         return res.status(400).json
// ({error:"something went wrong"})

//     }
//     res.send(products)
// }



// //to view product list
// exports.getAllProducts = async (req,res)=>{
//     let products  = await Product.find()
//     if(!products){
//         return res.status(400).json
// ({error:"something went wrong"})

//     }
//     res.send(products)
// }


//to get filtered product

exports.getFilteredProduct = async (req,res)=>{
    let sortBy = req.query.sortBy ? req.query.sortBy : 'createdAt'
    let order = req.query.order ? req.query.order : '1'
    //1, asc, ascending  ,0,dsc,descending-descending

    let limit= req.query.limit ? Number  (req.query.limit):9999
let Args = {}
for(key in req.body.filter){
    if(req.body.filter[key].length>0){
        if(key === 'product_price'){
            Args [key]= {
                $gte:req.body.filter[key][0],
                $lte:req.body.filter[key][1]
            }
        }
        else{
            Args[key]=req.body.filter[key]
        }
    }

}
let filteredProducts = await Product.find(Args).populate('category').sort([[sortBy,order]]).limit(limit)
if(!filteredProducts){
    return res.status(400).json({error:"error"})
}
res.send(filteredProducts)
}


/*  filter : {
    product_price
}
*/