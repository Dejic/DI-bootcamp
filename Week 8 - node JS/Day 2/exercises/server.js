const express = require("express");
const app=express();
const port = 3000
app.get("/:id",(req,res)=>{
    console.log(req.params.id)
    res.json({ id: req.params.id})
});

app.listen(port, ()=> console.log(`server is running on port : ${port}`))