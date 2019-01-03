var http = require('http');
var fs = require('fs');

// Chargement des fichier afficher au client
var server = http.createServer(function (req, res) {
	fs.readFile('./index.html', 'utf-8', function(error, content){
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(content);
	});
});	

// Chargement de socket.io
var io = require('socket.io').listen(serveur);

// Quand un client se connecte, on le notifie dans la console !
io.sockets.on('connection', function (socket) {
	console.log('Un client est connecté !');
});
server.listen(8080);