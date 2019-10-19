var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = 5000,
    app = express();
    
mongoose.connect('mongodb://0.0.0.0:27017/ppaDB', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true} ));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
});
require("./routes/router.js")(app);

module.exports = app.listen(port, console.log('Listening on port ' + port));