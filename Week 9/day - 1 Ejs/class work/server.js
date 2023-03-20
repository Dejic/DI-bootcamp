const express=require
('express');
const app=express();
const port = 3000

app.set("view engine", "ejs")
app.use(express.static("public"));
app.get("/",(req , res)=>{
    const data={greeting:"Welcome!",
    title:"leaarning EJS",
    paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus odio iusto dolor eos fuga ut saepe doloribus sequi magnam, libero mollitia ea quos delectus corrupti possimus odit incidunt placeat?"}
    res.render('index', {data});
})

app.listen(port, () =>
console.log("server is running on port"+ port))