const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("app is working");
});

app.listen(5000,(err)=>{
    if(err) console.log(err);
    console.log("app is listiningat 5000")
})