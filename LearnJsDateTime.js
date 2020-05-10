var time = new Date();
console.log(time);

time = new Date(1991,10,10);
console.log(time);

time = new Date("october 10,1991");
console.log(time);

time = new Date("10-10-1991");
console.log(time);


time = new Date("1991-10-10");
console.log(time);


console.log(time.getTimezoneOffset());
console.log(time.toUTCString());