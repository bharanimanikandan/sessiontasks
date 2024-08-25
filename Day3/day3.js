// Normal function
let person="Bharani";
function name(){
    console.log(person);
}
name();

// Normal Return function
function display(){
    return 454;
}
let a=display();
console.log(a);

// Higher order functions
// Normal HOF
function displays(){
    return function screen(){
        console.log("Return Function");
    } 
}
let out=displays();
out();

// Another example
function displayss(name){
    return function(age){
        console.log(name+","+age);
    };
}
let output=displays("Bharani");
output("24");

// Return as a params
function savithiri(ourname) {
    const name = "Bharani";
    ourname(name);
  }
  
  savithiri(function(name) {
    console.log("Hello, " + name);
  });

// Arrow Function
const multiply = (a, b) => a * b;

console.log(multiply(5, 3));

// Conditional statement
// if statement
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
};

// let score = 75;
let score=98;
if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  };
  
// Ternary
// let age = 16;
let canVote = (age >= 18) ? "Yes" : "No";

console.log("Can vote: " + canVote);

// Switch
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek day.");

// Loops
// Implement for loop in HOF
function loop(){
    return function(){
        let i;
        for(i=0;i<6;i++){
            console.log("i="+i);
        }
    }  
}
let finalout=loop();
finalout();

// Implement do while loop funtion as an params
function doWhileLoop(callback,condition){  // --> initiate a function with callback in do statement
    do{
        callback();
    }while(condition());
}

let count=0;                    //  --> create a function for do statement with values

function dow(){                 
    console.log("count is:"+count);
    count++;
}
function check(){               //  --> create a condition function for while statement
    return count<7;
}
doWhileLoop(dow,check);