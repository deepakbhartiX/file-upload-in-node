const express  = require('express')
const path = require('path')
const router = express.Router();

const app = express();

app.use(router)

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}));










router.get('/',(req,res)=>{
    res.render('home')
})



app.listen(8000,()=>{
    console.log("runing on port 8000")
})