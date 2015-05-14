var c = process.argv,count=0;
for(var i=2; i<c.length; i++){
	count += Number(c[i]);
}
console.log(count);
