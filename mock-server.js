var express = require('express');
var morgan = require('morgan');
var fs = require('fs');


var app = express();
var PORT = 3000;


console.log("Serving from " + __dirname);

// Logging yo terminal with Morgan 
app.use(morgan('tiny'));

//Mock 
app.get('/', (req, res) => {
    res.sendFile('webapp/test/mockserver.html', { root: __dirname });
});

// Static routing
app.use(express.static(__dirname + '/webapp'));
app.use('/prod', express.static('./dist'));



app.use('/sap/bc/ui2/start_up', function(req, res) {
     res.header("Content-Type", "application/json; charset=utf-8");
    res.send(fs.readFileSync('mockdata/start_up.json'));
});


app.listen(PORT);
console.log('Server running on port ' + PORT);