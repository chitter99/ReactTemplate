const express = require('express');
const app = express();

const config = require('./config.json');

app.use(express.static('./public')); // Serve Public folder as static ressource.

app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
});

var port = 5000 || config.port;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});