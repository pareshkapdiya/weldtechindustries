const cors = require('cors');
const path = require('path');
const express = require('express');
var contact = require('./app/routes/contact.route');
var enquiry = require('./app/routes/enquiry.route');
require('dotenv').config();

const app = express();
const port = process.env.PORT | 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist/weldtechindustries')));

app.use(cors());

app.post('/api/contact', contact.send);
app.post('/api/enquiry', enquiry.send);

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);