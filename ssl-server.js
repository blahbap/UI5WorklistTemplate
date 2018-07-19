var https = require('https');
var fs = require('fs');

var express = require('express');
var request = require('request').defaults({
    jar: false
});
var morgan = require('morgan');

var options = {
    key: fs.readFileSync('cert/key.pem'),
    cert: fs.readFileSync('cert/cert.pem')
};

var app = express();
var PORT = 3000;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //Ignore certificate errors

console.log("Serving from " + __dirname);

// Logging to terminal with Morgan 
app.use(morgan('tiny'));

// Static routing
app.use(express.static(__dirname + '/webapp'));
app.use('/prod', express.static('./dist/WebContent'));

// General routing of all URLs to SAP server - gets system from query parameter and looks up URL for system in config 
app.use('/sap', function(req, res) {

    var url = 'https://sapserver' + '/sap' + req.url;    
    console.log('Routing API call to URL: ' + url);
    req.pipe(request(url)).pipe(res);

});

https.createServer(options, app).listen(PORT);
console.log('Server running on port ' + PORT);