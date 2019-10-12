var express = require ('express')
var router = express.Router()

router.get('/', function(req, res) {
    console.log('GET to /');
    res.send('PPA')
});

module.exports = router