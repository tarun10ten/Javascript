let n = 123;
console.log(typeof(n));


n = 12.345;
console.log(typeof(n));

console.log(123e4);
console.log(123e-4);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log("hexadecimal ", 0xAB);

var num =16;
console.log("binary ", num.toString(2));
console.log("octal ", num.toString(8));
console.log("decimal ", num.toString(10));
console.log("hexadecimal ", num.toString(16));
console.log("duo trigesimal or base 32 ", num.toString(32));

var float = 25.2351;

console.log("w/o precission ", float.toFixed(0));
console.log("2 decimal precission ", float.toFixed(2));
console.log("4 decimal precission ", float.toFixed(4));

var name_obj1 = new String("Tarun");
var name    = "Tarun";

if(name == name_obj1){
    console.log("name == name_obj1 is true");
}else{
    console.log("name == name_obj1 is false");
}


let myName = "Mantina Tarun Kumar";

console.log("string length is "+ myName.length);
console.log("index of a is "+ myName.indexOf("a"));
console.log("A occurs at position "+ myName.search("a"));
console.log(myName.split(" "));   
console.log(myName.slice(-5));

