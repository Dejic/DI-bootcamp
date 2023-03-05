// const http = require('http'); 
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('Hello World');
// });
// const json =
// {
//     "menu": {
//         "id": "file",
//         "value": "File",
//         "popup": {
//             "menuitem": [
//                 { "value": "New", "onclick": "CreateNewDoc()" },
//                 { "value": "Open", "onclick": "OpenDoc()" },
//                 { "value": "Close", "onclick": "CloseDoc()" }
//             ]
//         }
//     }
// }

// const http = require('http'); 
// const server = http.createServer((req, res) => {  
     
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(200);
//         res.end(JSON.stringify)(json);
//     });
// server.listen(5000);

// const express =require('express')
// const app =express()
// const port = 3000

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// });

// app.get("/loginPage", (req, res) =>{
//     res.send("Welcome to the login page")
// });
// app.listen(port, ()=> console.log ("server is running on port" + port));


const express =require('express')
const app =express()
const port = 3000
const theDate = Date()

function theDateFunction(req, res, next) {
    console.log(theDate)
  next()
}


app.get('/home', (req, res) => {
    console.log("running home page");
    res.send('Home Page');
});

app.get('/about', theDateFunction, (req, res) => {
    console.log("running about page");
    res.send('About Page');
});

app.listen(3000, () => console.log("app is listening on port " + port));