var express = require('express');
var app = express();
var http = require('http').Server(app);
// for getting user input from html body
// home route
// require('./routes/homeroute.js').route(app, path);
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/www'));
// the reason why server.js was not working last week was because the below code is required, which was asked to be removed
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My first Nodejs server!");
    console.log(`Server listening on: ${host}, port: ${port}`);
});

// doesn't work because entry point is index.html in package.json
app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/test.html');
});

// app.get('/login', function(req, res){
//     res.sendFile(__dirname + '/www/login.html');
// });

app.post('/api/login', (req, res) => {
    let dummyData = {
        "users": [
            {"userName": "kevin", "passWord": "123"},
            {"userName": "cat", "passWord": "meow"},
            {"userName": "dog", "passWord": "woof"}
        ]
    };

    var customer = {};
    customer.username = req.body.username;
    customer.password = req.body.password;
    console.log(req.body);
    customer.valid = false;
    // res.send(`Username: ${username} Password: ${password}`);

    for(var i=0; i<dummyData.users.length; i++){
        jsonData = dummyData.users;
        if (jsonData[i]["userName"] == req.body.username && jsonData[i]["passWord"] == req.body.password){
            console.log("Match found");
            customer.valid = true;
        } else {
            console.log("No match");
        };
    }
    res.send(customer);
});

app.get('/account', function(req, res){
    res.sendFile(__dirname + '/www/account.html');
});