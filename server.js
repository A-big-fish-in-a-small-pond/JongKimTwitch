var SSE = require('sse')
var http = require('http');
 
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');
});


server.listen(9999, '127.0.0.1', function() {
  var sse = new SSE(server);
  sse.on('connection', function(client) {
    setInterval(function() {
      //실시간으로 데이터 보내기


    }, 0);    
    
  });
});

//a + b + c / 3
//((a + b) / 2 + c) / 2 