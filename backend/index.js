const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/Users');
const Product = require('./db/Product');
const { response } = require('express');
const Jwt = require('jsonwebtoken')
const jwtKey= 'e-comm';
const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
    let user = await new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    await Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err) res.send({ msg: "somthing went wrong" })
        res.send({result:result,auth:token})
    })

});

app.post("/login", async (req, res) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password');
        if (user) {
            await Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err) res.send({ msg: "somthing went wrong" })
                res.send({user:user,auth: token});
            })
            
        } else {
            res.send({ msg: "no user found" })
        }
    } else {
        res.send({ msg: "no user found" })
    }


});

app.post("/add-product", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get("/products", async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ resule: "no result find" })
    }
})

app.delete("/product/:id", async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
})

app.get("/product/:id", async (req, res) => {
    const result = await Product.findOne({ _id: req.params.id })
    if (result) {
        res.send(result);
    } else {
        res.send({ result: `no record found` });
    }
})

app.put("/product/:id", async (req, res) => {
    const result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )

    res.send(result)
});

app.get("/search/:key", async (req, res) => {
    let result = await Product.find({
        "$or": [
            {name: { $regex: req.params.key }},
            {price: {$regex: req.params.key}},
            {category: {$regex: req.params.key}},
            {company: {$regex: req.params.key}}
        ]
    })
    res.send(result);
});


app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log("app is listiningat 5000")
})