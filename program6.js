var findDir = require('./findExtList');
findDir(process.argv[2],process.argv[3],function(err,data){
	//console.log(data);
	for(var i in data){
		console.log(data[i]);
	}
});
