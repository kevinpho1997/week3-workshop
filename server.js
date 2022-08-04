var express = require('express');
const { path } = require('express/lib/application');
const { hostname } = require('os');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));

// home route
require('/routes/homeroute.js').route(app, path);

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My first Nodejs server!");
    console.log(`Server listening on: ${host}, port: ${port}`);
});

app.get('/test', function(req, res){
    res.sendFile(__dirname + '/www/test.html');
});

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/www/login.html');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});

app.get('/account', function(req, res){
    res.sendFile(__dirname + '/www/account.html');
});