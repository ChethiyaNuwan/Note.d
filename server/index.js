const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});


// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send("hello");
});