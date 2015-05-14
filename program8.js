var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    //res.writeHead(200, { 'content-type': 'text/plain' });
	//fs.createReadStream(process.argv[3]).pipe(res);
	var readStream = fs.createReadStream(process.argv[3]);
	readStream.on('open',function(){
		readStream.pipe(res);
	});
});

server.listen(process.argv[2]);
