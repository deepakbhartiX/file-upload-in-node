const express  = require('express')
const path = require('path')
const router = express.Router();
const multer = require('multer');

const app = express();




app.use(router)

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}));


const storage = multer.diskStorage({
    destination:function(req,res,cb){
         return cb(null,"./uploads");
    },
    filename:function(req,file,cb){
        return cb(null,`${new Date().toISOString().replace(/:/g,'-')}-${file.originalname}`);

        // don't use (new Date().toISOString() ) becase it generate ":" in middle of img file name which is not supported by windows thus give error like "Error: ENOENT: no such file or directory, open 'C:\Users\Deepak Bharti\Desktop\file upload in node\uploads\2025-04-22T09:18:36.521Z-8DWNGUL1_8x.jpg' " so to prevent this proble replace : with - by using "new Date().toISOString().replace(/:/g,'-')"
    }
})



const upload = multer({storage});


router.post("/upload",upload.single('imagefile'),(req,res)=>{
    // console.log(req);
    console.log(req.file);
    console.log(new Date(Date.now()));
    return res.redirect("/");
})



router.get('/',(req,res)=>{
    res.render('home')
})



app.listen(8000,()=>{
    console.log("runing on port 8000")
})