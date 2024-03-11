//SECTION: 33 CREATING SERVERS WITH THE EXPRESS

import express from 'express'

const app = express();
const port = 8080;

app.use((req, res)=>{
    console.log("NEW REQUEST IS BEING MADE TO THE SERVER");
    res.send('<h1>This is response being send to the server</h1>')
})

app.listen(port, ()=>{
    console.log("App is listening to the port 8080");
})