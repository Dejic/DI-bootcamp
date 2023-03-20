const express=require
('express');
const app=express();
const port = 3000

app.set("view engine", "ejs")
app.use(express.static("public"));
app.get("/",async (req , res)=>{
    let feed = await parser.parseURL('https://www.reddit.com/.rss');
  console.log(feed.items);
    res.render('index', {feed});
})

app.listen(port, () =>
console.log("server is running on port"+ port))

let Parser = require('rss-parser');
let parser = new Parser();

// (async () => {

//   let feed = await parser.parseURL('https://www.reddit.com/.rss');
//   console.log(feed.title);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });

// })();