module.exports = {
    route: (app, path) => {
        // app - passes in the express object needed for the route.
        // path - passes in a path object needed to find the file. The path module is part of node and needs to be required in the server.js file
        app.get('/', function(req, res){
            let filepath = path.resolve('../www/login.html');
            res.sendFile(filepath);
        });
    }
}