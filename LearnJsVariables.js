var a;
a = 10;
var b,c;

b=c=20;

console.table(a,b,c);

y= b*c;
console.log(y);

var string = `hello ${a}`;
var string2 = "hello "+ a ;
console.table(string,string2)

let value = 12;

// let value = 24; //throws an error as we are re-declaration  with let

const MY_BIRTHDAY = "10.10.1991";
console.log(MY_BIRTHDAY);

// var allows hoisting
// let and const do not allow hoisting 

var one;
console.log(one);
let two;
console.log(two);

var three = null;
console.log(three);

// concatenation left to right