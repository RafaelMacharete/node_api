const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

// configure dotenv
dotenv.config();

// rest object
const app = express();

// middleware
app.use(express.morgan());
app.use(morgan("dev"));

// routes
app.get("/test", (req, res) => {
    res.status(200).send("<h1>NodeJs MySql App </h1>")
});

// port
const PORT = process.env.PORT || 8080;

// conditionaly Listen
mySqlPool.query('SELECT 1').then(() => {
    // MY SQL
    console.log('MySql DB Connected'.bgCyan.white)
    // listen
    app.listen(PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`.bgMagenta.white);
    })
}).catch((error) => {
    console.log(error);
})
