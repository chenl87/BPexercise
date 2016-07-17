var http = require('http');
var config = require('./config.json');
var dispatcher = require('httpdispatcher');
var fs = require('fs');
var path = require('path');

function handleRequest(request, response){
    try {
        console.log("Requested URL: " + request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('I <3 Pandas');
});

dispatcher.onGet("/small.png", function(req, res) {
    var img = fs.readFileSync(path.join(__dirname, 'resources/small.png'));
    res.writeHead(200, {'Content-Type': 'image/gif'});
    res.end(img, 'binary');
});

dispatcher.onGet("/medium.png", function(req, res) {
    var img = fs.readFileSync(path.join(__dirname, 'resources/medium.png'));
    res.writeHead(200, {'Content-Type': 'image/gif'});
    res.end(img, 'binary');
});
dispatcher.onError(function(req, res) {
        res.writeHead(404);
        res.end("404 - Page Does not exists");
});

http.createServer(handleRequest).listen(config.port, function(){
    console.log("Server listening on: http://localhost:%s", config.port);
});
