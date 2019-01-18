'use strict';

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'docs')))
// app.use(express.static('./src/client/'));
// app.use(express.static('./'));
// app.use(express.static('./.tmp'));
// app.use('/*', express.static('./src/client/index.html'));

app.post('/sendMail', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jessica.paull08@gmail.com',
      pass: '101uj311y'
    }
  });
  var data = req.body;
  console.log(data);
  var mailOptions = {
    from: data.contactEmail,
    to: 'jessica.paull08@gmail.com',
    subject: 'sherripaullssalon.com message from ' + data.contactName,
    text: data.contactMessage
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    console.log('Data:' + data.contactName);
  });
  res.json(data);
});

// Get port from environment and store in Express
const port = process.env.PORT || 5000;
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
app.listen(port, function () {
  console.log('Express app listening on port: ' + port);
  console.log(__dirname);
});