//variable kyay nyar

const PI = 3.14; // cant change value
var PI   = 3.14; 
let PI   = 3.14;

var arr1 = ['aaa','bbb','ccc'];
var arr2 = ['xxx','yyy','zzz'];

var arr3 = [...arr1,...arr2]; // array 2 khu join

var arr4 = [...arr1,'ddd']; // new array mar array 1 khu ko shi par tar array mar htet paung

var name = "Bob";
var age  = 22;

console.log(`Welcome ${name}. Your age is ${age}.`);


class Animals{
	constructor(legs,wings){
		this.legs = legs;
		this.wings = wings;
	}

	walk(){
		return "Walking";
	}
}

class Dog extends Animal(){
	
}

var dog = new Animals(2,0);
console.log(dog.walk());