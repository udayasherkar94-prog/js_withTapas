// 1. What will be the output of the following code and why?


function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();//O/p - 1
counter();//O/P - 2

//but mean thing is here closure how it remenber the updated value of counter it does not reset to the zero
//here it works as encapsulation where it treat as counter variable is private cannot change directly 
//you can access it use it in your function but you cant modify the original value 
//so there how closure works 
//closure always closed on a value of a varible fromm his outer function . It remembers the value
//a closure allow a function to access a variable from its outer scope even after the Outer function finishes execution
//important factors: outer function and inner function (return by outer fun) , scope ,closure

//here counter() => it act like closure function




//2. What will be the output and why?
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());
//O/P -100 because testClosure() executes first and returns the inner function that still remembers x = 10 (closure).
//The second () immediately calls that returned function, which calculates x * x and prints 100.




// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.


function multiplier(multiplier){

    return function(num){
        return num * multiplier;
    }
}

const mult = multiplier(10);
console.log(mult(5));





//5. What happens if a closure references an object?
//The object remains in memory as long as the closure exists

//Explanation:
//When a closure references an object, JavaScript keeps that object in memory because the inner function still needs access to it.
//  The object will only be garbage collected when no closures or references to it remain.


function createUser() {
    let user = { name: "Rahul", age: 20 };

    return function () {
        return user;
    };
}

let getUser = createUser();
let obj = getUser();

obj.age = 25;   // modify the object

console.log(getUser().age); // 25







// Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
function createCounter() {
    let count = 0; // private variable (closure)

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset:function(){
            count = 0;
            return count;
        }
    };
}

const counter2 = createCounter();

console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset());//0