var express = require('express');
// Variables
var port = 5000,
	app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/main.html');
});
require("./routes/router.js")(app);

module.exports = app.listen(port, console.log('Server running on ' + port));
