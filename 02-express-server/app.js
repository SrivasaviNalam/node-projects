const express = require('express');
const HomePageRouter = require('./routes/HomePageRouter');

const app = express();

// app.get('/',(req,res) => {
//     res.send("Hello, Sri!. This is express");
// });

// Routing using the custom module
app.use('/',HomePageRouter);

app.get('*',(req,res) => {
    res.send("We cant find the requested page");
});

const port = 3030;

app.listen(port, () =>{
    console.log("Server running on port",port);
});

