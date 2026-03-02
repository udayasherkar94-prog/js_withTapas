
// 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.


//let and const are block scope 
// var is a functional scope
{
//   console.log(a); //  ReferenceError (TDZ)
//   console.log(b); //  ReferenceError (TDZ)
//   console.log(c); //  ReferenceError (TDZ)

  console.log(d);//undefinned not through error

  let a = 10;
  const b = 20;
  let c = 30;
  var d = 40;

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30

   console.log(d);//40
}

// console.log(a); //  ReferenceError a is not defined
// console.log(b); //  ReferenceError b is not defined
// console.log(c); //  ReferenceError c is not defined
 
 console.log(d);//40



//  2. Explain Variable and Function Hoisting with Example. Post the code as your answer.


// ===============================
// VARIABLE HOISTING EXAMPLE
// ===============================

console.log(x); // undefined (not an error)
var x = 10;
console.log(x); // 10

/*
Explanation:
- 'var x' is hoisted to the top of its scope.
- Only the declaration is hoisted, not the initialization.
- JavaScript internally treats it like:

var x;
console.log(x); // undefined
x = 10;
console.log(x); // 10
*/


// ===============================
// LET / CONST (NOT HOISTED THE SAME WAY)
// ===============================

console.log(y); // ❌ ReferenceError (Temporal Dead Zone)
let y = 20;


// ===============================
// FUNCTION HOISTING EXAMPLE
// ===============================

greet(); // ✅ Works

function greet() {
  console.log("Hello, World!");
}

/*
Explanation:
- Function declarations are fully hoisted.
- Both the function name and its body are moved to the top.
- So we can call the function before its definition.
*/


// ===============================
// FUNCTION EXPRESSION (NOT HOISTED LIKE DECLARATION)
// ===============================

sayHi(); // ❌ TypeError (undefined is not a function)

var sayHi = function () {
  console.log("Hi!");
};

/*
Explanation:
- 'var sayHi' is hoisted (as undefined).
- The function assignment happens later.
- So calling it before assignment causes an error.
*/