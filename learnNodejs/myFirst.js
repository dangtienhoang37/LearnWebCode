var http = require('http');
var dateTime = require('./creatModule');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('the date and time are currently: '+ dateTime.myDateTime());
    res.end();
}).listen(8080);