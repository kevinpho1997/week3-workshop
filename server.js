var express = require('express');
const { path } = require('express/lib/application');
const { hostname } = require('os');
var app = express();
var http = require('http').Server(app);
// for getting user input from html body
const bodyParser = require('body-parser');
// home route
// require('./routes/homeroute.js').route(app, path);

app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({ extended: false }))



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
    var dummyData = {
        "users": [
            {"userName": "kevin", "passWord": "123"},
            {"userName": "cat", "passWord": "meow"},
            {"userName": "dog", "passWord": "woof"}
        ]
    };

    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);

    for(var i=0; i<dummyData.users.length; i++){
        jsonData = dummyData.users;
        if (jsonData[i]["userName"] === username && jsonData[i]["passWord"] === password){
            console.log("Match found");
            // return {"valid": true};
        } else {
            console.log("No match");
            // return {"valid": false};
        };
    }
});

app.get('/account', function(req, res){
    res.sendFile(__dirname + '/www/account.html');
});