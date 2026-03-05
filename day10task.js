//1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
//O/P: BOb because inner() when execute then it checks the user value to first in self block if not then its nearest parent
// so here outer there is a user which value is Bob so it finish execution it never goes to the global user variable



//What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

// let lets you change the value, but you cannot declare the same variable name again in the same scope, or it will give an error.
// In a big application, you might forget that total was already declared, and if you try to declare it again, your code will break.
// Global variables can be changed from anywhere in the program, which can cause unexpected problems.
// If the variable is only needed for a small task, it is better to use it inside a function (function scope) so it stays limited and safe.


//3. Create a function with a nested function and log a variable from the parent function.

function func1(){
    const str = "this is a parent function variable";

    function func2(){
        console.log(str);
    }

    func2();
}

func1();


//4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function sample(){

    for(let i=0;i<5;i++){
        // let num = 0;
        var num = 0;
        num++;
    }
    //console.log(i);  error if let i
    // console.log(i); no error if var i
    console.log(num)// it run with var variable  | not with let because let is block scope 
}
// console.log(num) it always give error because here also var is functional scope we cannot accces out of the function 
sample()


//5. Write a function that tries to access a variable declared inside another function.

function outer2() {
    let message = "Hello World";
}

function inner2() {
    console.log(fun.message); // Trying to access variable from outer
}

// inner2();
//refernce error message is not defined : here message is in the outer2 functional scope so it is not access

// here is another try

function another(func){
    console.log(func()); //console.log(undefined);
}

another(outer2);//it gives undefined because : If a function does not return anything, it automatically returns undefined.


// 6. What will be the output and why?
//console.log(a);// ReferenceError: Cannot access 'a' before initialization (because of TDZ)
let a = 10;

//if i tey with var a = 10 then it gives me undefined which calling before executig 




// 7. Where is the age variable accessible?

function showAge() {
    let age = 25;
    console.log(age);// works here
}

showAge()

//console.log(age);
// ReferenceError: age is not defined



// 8. What will be the output and explain the output?

let message = "Hello";

function out() {
    let message = "Hi";

    function inn() {
        console.log(message);
    }

    inn();
}

out();

//O/P hii because it check nearest parents lexical scope there is a variable message yeah there is sot console and finsh the execution





// 10. What will be the output and why?

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();// O/P -1  because 0-1 = -1
reduce();//O/P -2 because -1 -1 = -2 
//but mean thing is here closure how it remenber the updated value of counter it does not reset to the zero
//here it works as encapsulation where it treat as counter variable is private cannot change directly 
//you can access it use it in your function but you cant modify the original value 
//so there how closure works 
//closure always closed on a value of a varible fromm his outer function . It remembers the value
//a closure allow a function to access a variable from its outer scope even after the Outer function finishes execution
//important factors: outer function and inner function (return by outer fun) , scope ,closure

//here reduce() => it act like closure function

//day10