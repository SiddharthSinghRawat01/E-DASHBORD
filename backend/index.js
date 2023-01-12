const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/Users');
const Product = require('./db/Product');
const { response } = require('express');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req,res)=>{
    let user = await new User(req.body);
    let result = await user.save();
    result= result.toObject();
    delete result.password;
    res.send(result)
});

app.post("/login",async (req,res)=>{
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select('-password');
    if(user){
        res.send(user);
    } else {
        res.send({msg:"no user found"})
    }
    } else {
        res.send({msg:"no user found"})
    }
    
    
});

app.post("/add-product", async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})


app.listen(5000,(err)=>{
    if(err) console.log(err);
    console.log("app is listiningat 5000")
})