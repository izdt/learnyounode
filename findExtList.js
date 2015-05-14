var fs = require('fs');
var path = require('path');
module.exports = function(dir,extname,callback){
	fs.readdir(dir,function(err,list){
	if(err) return callback(err);
	var elist = [];
	for(var i in list){
		if(path.extname(list[i])=="."+extname){
			elist.push(list[i]);
		}
	}
	callback(null,elist);
	});
}
