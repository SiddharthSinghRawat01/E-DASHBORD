const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/Users');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/register', async (req,res)=>{
    let user = await new User(req.body);
    let result = await user.save();
    res.send(result)
})


app.listen(5000,(err)=>{
    if(err) console.log(err);
    console.log("app is listiningat 5000")
})