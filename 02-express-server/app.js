const express = require('express');
const AppRouting = require('./routes/AppRouting');

const app = express();

// app.get('/',(req,res) => {
//     res.send("Hello, Sri!. This is express");
// });

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('./public'));

// Routing using the custom module
app.use('/', AppRouting);

app.get('*',(req,res) => {
    res.send("We cant find the requested page");
});

const port = 3030;

app.listen(port, () =>{
    console.log("Server running on port",port);
});