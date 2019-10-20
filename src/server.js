var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bmiRouter = require('./routes/bmi.js');
var distanceRouter = require('./routes/distance.js');

var port = 5000,
    app = express(),
    config = require('../config.js');
    
mongoose.connect(config[app.settings.env], { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
});

app.use('/bmi', bmiRouter);

app.use('/distance', distanceRouter);

module.exports = app.listen(port, console.log('Listening on port ' + port));
