// Hoisting
// Hoisting in var Variable   --> var variable partially support Hoisting because its only create a memory space

console.log(a);
var a=5;

// Hoisitng in let and const variable   -->let & const not support a Hoisting
console.log(b);
console.log(c);
let b=20;
const c=35;

// Hoisting in normal functions    -->Supports Hoisting
hello()
function hello(){
    console.log("hello");
}

// Hoisting in arrow function      -->Not supporting Hoisting
arrFun()
const arrFun=()=>{
    console.log("arrFun");
}

// Hoisting in HOF                 -->Supporting Hoisting
let hhof=hof()
hhof();
function hof(){
    return function(){
        console.log("retFun");
    };
}

// Scope 
var variable1="i am global";

function scope(){
    var variable2="i am local scope"
    console.log(variable1);
    console.log(variable2);
}
console.log(variable2);             //---> variable2 is not defined
scope();


// Arrays
let numbers=[1,2,3,4,5];
console.log(numbers);
console.log(numbers.length);
console.log(numbers.indexOf(5));

// push & pop
numbers.push(6)
console.log(numbers);

numbers.pop()
console.log(numbers);

// unshift & shift
numbers.unshift(6)
console.log(numbers);

numbers.shift()
console.log(numbers);

// slice & splice
let slicedNumbers=numbers.slice(1,4)
console.log(slicedNumbers);
console.log(numbers);

let splicedNumbers=numbers.splice(1,1,6)
console.log(splicedNumbers);
console.log(numbers);

// forEach
let arrays=[10,20,30,40,50,60]
arrays.forEach((item, index)=>{
    console.log(item);
    console.log(index);
    console.log(`${index}=${item}`);
})

// Map function -->[Own Try] create a null values
const mapReturn=arrays.map((item, index)=>{
    if(item>=30){
    console.log(item);
    console.log(index);
    return item*2+"number"
    }return null;
})
console.log(mapReturn);

// filter
const filArr=arrays.filter(i=>i>20)
console.log(filArr);

// Add Filter in Map [Own Try]
const mapReturnArr=arrays.map((item, index)=>{
    if(item>=40){
    console.log(item);
    console.log(index);
    return item*2+"number"
    }
    const filNum=arrays.filter(i => i<40)
    console.log(filNum);
})
console.log(mapReturnArr);

// Object iteration
const person = {
    name: "bharani",
    age: 24,
    occupation: "Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


// JSon implement filter & implement if inside the foreach

let employee=[
    {
        name:"Bharani",
        age:24,
        role:"Jr Devloper"
    },
    {
        name:"Mythili",
        age:24,
        role:"Jr Devloper"
    },
    {
        name:"Karan",
        age:39,
        role:"Devloper"
    },
    {
        name:"Mani",
        age:31,
        role:"Devloper"
    },
    {
        name:"Suresh sir",
        age:35,
        role:"Sr Devloper"
    },
];
// filter in json
const filtEmp=employee.filter(i => i.age<30)
console.log(filtEmp);

//foreach and if
employee.forEach(item =>{
    if(item.age<30){
    console.log(`${item.name} age of ${item.age} worked as ${item.role} `);
    }else{
        console.log(`${item.name} age of ${item.age} worked as ${item.role}`);
    }
})


// Interview Question Task
function fun1() {
    function fun2() {
        console.log("This is fun2");
    }
    return fun2;
}
const myFun2 = fun1();
myFun2();