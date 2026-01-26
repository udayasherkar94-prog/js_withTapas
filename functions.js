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