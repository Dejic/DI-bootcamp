const express = require('express')
const app = express()
const port = 3001
const cors = require ("cors")
const db = require('knex')({
    client: 'pg',connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'Clubhouse123',
        database: 'To do list'
    }
});

app.use(cors())
app.use(express.json())
app.get("/getinfo",async (req,res)=>{
let items=await db("items").select()
console.log(items)
    
res.json(items)
})





app.listen(port,()=>console.log("server is running"))
