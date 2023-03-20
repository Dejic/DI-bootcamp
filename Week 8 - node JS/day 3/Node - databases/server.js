const express = require('express');
const app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Yedidyoh123',
        database: 'Hollywood',
        port: 5432
    }
});

app.set("db", db);
// app.get("/",(req,res)=>{
//     db.select().from('actors').then((actors)=>{
//         res.send(actors);
//     });
// });

// app.get("/",(req,res)=>{
//     db("actors").where({ first_name: "Matt"}).then((actors)=>{
//         res.send(actors);
//     });
// });

// select condditional AND
// app.get("/",(req,res)=>{
//     db("actors").where({ first_name: "Matt",last_name: "Damon"})
//     .then((actors)=>{
//         res.send(actors);
//     });
// });

// select with comparison
// app.get('/', (req, res) => {
//     db('actors')
//     .where('number_oscars', '>=', 2)
//     .then(actors =>
//         res.send(actors)
//     )

// })

// or

// app.get('/', (req, res) => {
//     db('actors')
//     .where('actor_id', 1)
//     .orWhere({ first_name: "Angelina" })
//     .then(actors =>
//         res.send(actors)
//     )
// })

// insert multiple collumns
// app.get('/',(req,res)=>{
//     db('actors')
//         .insert({first_name: "Gal",last_name: "Gadot",age:'08/12/1997',number_oscars:0})
//         .then(actors=>res.send(actors));
// })
// update several columns
// app.get('/', (req, res) => {
//     db('actors')
//         .where('first_name', 'Gal')
//         .andWhere('last_name', 'Gadot')
//         .update({
//             number_oscars: 2,
//             age: '1985-04-29'
//         },
//             ['actor_id', 'number_oscars'])
//         .then(actors =>
//             res.send(actors)
//         )
// })

app.get('/', (req, res) => {
    db('actors')
        .where('first_name', 'Gal')
        .andWhere('last_name', 'Gadot')
        .del(['actor_id', 'first_name', 'last_name'])
        .then(actors =>
            res.send(actors)
        )
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));