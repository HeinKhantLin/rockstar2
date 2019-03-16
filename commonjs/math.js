var PI = 3.14;

/*function add(a,b){
	return a+b;
}*/

/*function area(r){
	return PI * r * r;
}*/

//Arrow function
var add = (a,b) => a + b;

var area = (r) => PI * r * r;


module.exports = {
	 PI,
	 area 
}