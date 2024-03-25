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
import express from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));


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