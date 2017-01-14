var express = require('express');

var app = express();
var router = express.Router();
var port = 3000;
app.use('/api', router);
app.get('/home', function(req, res){
	res.send('Welcome to api');
});

app.listen(port, function(){
	console.log('running');
});