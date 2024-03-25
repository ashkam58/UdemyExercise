//SECTION: 33 CREATING SERVERS WITH THE EXPRESS

// import express from 'express'

// const app = express();
// const port = 8080;

// app.use((req, res)=>{
//     console.log("NEW REQUEST IS BEING MADE TO THE SERVER");
//     res.send('<h1>This is response being send to the server</h1>')
// })

// app.get('/cats', (req, res)=>{
//     console.log("Cat Request");
// })

// app.get('/dogs', (req, res)=>{
//     console.log("Dog Request");
// })

// app.post('/cats', (req, res)=>{
//     console.log("Cat Request but in post");
// })

// app.get('/', (req, res)=>{
//     console.log("This is the home page");
// })

// app.listen(port, ()=>{
//     console.log("App is listening to the port 8080");
// })








// SECTION 35 DEFINING RESTFUL ROUTes
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const path = require('path');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


const comments = [
    {
        username: "Todd",
        comment: "Lol that was so funny"
    },
    {
        username: "onlySayWoof",
        comment: "woof woof woof"
    },
    {
        username: "Layla",
        comment: "Lol main Laila"
    },
    {
        username: "Frodd",
        comment: "Earth is triangle"
    }
]



app.get('/comments', (req, res)=>{
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res)=>{
    res.render('comments/new');
})

app.post('/comments', (req, res)=>{
    const {username, comment} = req.body;
    comments.push({username, comment})
    res.send('It worked')
})

app.get('/tacos', (req, res)=>{
    
    res.send("Get method called");
})

app.post('/tacos',(req, res)=>{
    const {meat, qty} = req.body;
    res.send(`here are you ${qty} ${meat} tacos`);
})

app.listen(3000, ()=>{
    console.log("App is listening to the port 3000");
})