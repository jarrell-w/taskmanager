// Require dot env file for using env file. Require express to use express
// set app to express app, use express layouts. set port number
// We use PORT 5000 or whatever port we must use from the env file.
require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json())
app.use(expressLayouts);
app.use(express.static('public'));
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// We are setting our router up in the routers/main file
// So that it controls all the routing. '/' is the main page.
app.use('/', require('./server/routes/main'));

// Listen on port and confirm.
app.listen(PORT, () => {
    console.log(`listening on port PORT`);
})