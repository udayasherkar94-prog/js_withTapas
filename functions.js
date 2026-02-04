//function is a block of reusable code that perform a specific task
//functions in js are objects which are refernce type which is non-primitive data type

fun1();//expected O/P hello function it works
console.log(fun1)//O/P: body of function 

function fun1(){
    console.log("hello function")
}

function square(num){
    return num*num;//return statement return the value and end function 
}

let result = square(3)
console.log("square of a number:",result);

//Example on how function affects object property by refernce

function myFunc(obj){
    obj.model = "toyota"
}

const car = {
    model:"honda",
    year:"1996"
}
console.log(car.model)//O/P: honda
myFunc(car);
console.log(car.model)//O/p : toyota
//similary it change the actual value of array 

//function as expression

const sq = function(num){ // such fuctions are anonymous (without name)
    return num*num;
}

console.log(sq(5))

//factorial with recurson

const factorial = function fact(n){
    return n<2?1:n*fact(n-1);
} 

console.log(factorial(3))

//recursion function calling itself

// function foo(){
//     foo()//it runs till memory fills full error
// }

// foo() RangeError: Maximum call stack size exceeded

function count(num){
    if(num===0){
       return 0

    } 
   
    // console.log(num)
    return num + " " +count(num-1)
}

let backWard = count(10);
console.log(backWard)

//function parameters default | rest 

function add(a,b,c){ 
    return a+b+c
}
console.log(add(1,2)) //O/P: NaN (not an number) it take a:1 b:2 c: undefined so  number+undefined = NaN

function add1(a,b,c=0){ //c is a default parameter with 0 value
    return a+b+c
}
console.log(add(1,2))//O/P:3

//rest parameter

function add2(a,b,c,d,...rest){
    console.log(a,b,c,d,rest)
    return a+b+c+d

}
console.log(add2(1,2,3,4,4,5,6,7,8,9,10,11,12))

//nested functions 

var x = 10;
let y = 20;
const z = 30;
function outer(){
    console.log("i am in outer scope")

    function inner(){
        var inner = 100       
        console.log(x,y,z)
        console.log("i am in inner scope")
    }
    inner();
}
outer();
// console.log(inner);//ReferenceError: inner is not defined

//callback function

function msg(name,callback){
    console.log("hello"+" "+name)
    callback();
}

msg("rohan",function(){
    console.log("good night")
})

//pure function 

//pure function is that always return the same output for the same input
//. Does not change anything outside the function (no side effects)


function addition(a, b) {
  return a + b;
}
console.log("addition:",addition(2,3));

// for 2 and 3 o/p: always 5 input same(2,3)=> O/P same=>(5)
//No global variable change No DOM, no API, no console
//Important Clarification 🧠 The value can change between calls What must NOT change is the output for the same input.



//Higher Order function(HOF) => return | take argument as function

//1) function as a argument
function greet1(name) {
  return "Hello " + name;
}

function processUser(fn, value) { //fn as greet (value)  value=> Uday
  return fn(value);//greet function call here
}

console.log(processUser(greet1, "Uday"));

//visual flow
// processUser(greet, "Uday")
//         ↓
// fn = greet
//         ↓
// fn(value)
//         ↓
// greet("Uday")
//         ↓
//expected O/P:  "Hello Uday"


//return function

function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10



//Arrow function
//Syntax : const functionName = (parameters) => expression;
const sub = (x,y) => x-y;
console.log(sub(10,5));

const greet2 = (name) => {
  return "Hello " + name;
};

console.log(greet2("rohan"))

//arrow function as call back function

const nums = [1, 2, 3];

const squares = nums.map(n => n * n);

console.log(squares);


//callstack |Scope | Hoisting | Closure in notes