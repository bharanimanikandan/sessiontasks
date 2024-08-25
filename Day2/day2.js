//  DAY-2


// Alert Box
alert("Hello Programmers");

// Prompts
let name=prompt("What is your name")
alert("Hello,"+name);

// Operators
// Arithmatic
let x = 10;
let y = 3;

console.log(x + y); 
console.log(x - y); 
console.log(x * y); 
console.log(x / y); 
console.log(x % y); 
console.log(x ** y);

// Logical
let v = true;
let w= false;

console.log(v && w);
console.log(v || w);
console.log(!v);


// 1)Var redeclare
var j=30;
var j=45;           
console.log(j);     //--> Re-DEclare

// 2)
var k=20;
function name() {
    var k=35
    console.log(k);
}                   
name()             //--> Re-Declalre

// 3) let Not support re-declare
let variable=40;
let variable=46;           //--> Global
console.log(c);            //--> Already Defined

// 4) can reclare based on scope
let a= 10;
function name() {
    let a=100
    console.log(a);
}
name();             //--> Re-Declare