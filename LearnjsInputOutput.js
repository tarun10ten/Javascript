let name = prompt("Please enter your name: ", "name" );
console.log(`The name you entered is ${name}`);
alert(`The name you entered is ${name}`);

let name2 = prompt("Please enter your name: ", name );
console.log(`The name you entered is ${name2}`);
alert(`The name you entered is ${name2}`);

let name3 = confirm("What is your decission ?");
if(name3){
    console.log("OK");
}else{
    console.log("Not OK");
}