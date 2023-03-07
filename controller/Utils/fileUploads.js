
const multer =require('multer')
const fs = require('fs')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        const destination = 'public/uploads'
        if(!fs.existsSync(destination)){
            fs.mkdirSync(destination,{recursive:true})
        }
      cb(null, destination)
    },
    filename: function (req, file, cb) {
        //abc.jpeg
        //ext -> .jpepg
        //fname -> abc
        //file name -> abc1234563214-1234533.jpg

        let ext = path.extname(file.originalname)
        let fname = path.basename(file.originalname,ext)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const filename = fname + uniqueSuffix + ext
      cb(null, filename)
    }
  })
  
  const imageFilter = (req,file,cb) =>{

    if(!file.originalname.match(/\.(jpeg|JPEG|png|PNG|gif|GIF|jpg|JPEG|jfif|JFIF|AVIF|avif)/)){
        return cb (new Error ("Invalid image file"))

    }
    cb(null,true)

  }
  const upload= multer({

    storage :storage,
    fileFIlter :imageFilter,
    limits:{
        fileSize :5000000
    }
  })

  module. exports = upload