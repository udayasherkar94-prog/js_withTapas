i just started course of js with tapas on youtube on jan 1 2026

Functions are the heart of JavaScript because they control behavior, scope, and asynchronous execution.

Function Scope Explained with Your Example 🍦
👉 A small child can ask money from a big man, but a big man cannot ask money from a child.
In function scope, inner functions can access outer variables, but outer functions cannot access inner variables.



*** Execution Context and call Stack


What is Lexical Scope in JavaScript?
Lexical scope means that a variable’s scope is determined by where it is written (defined) in the code, not where it is called.

In simple words:
👉 Functions can access variables from their own scope and from the scopes where they were created.

Simple Example
function outer() {
  let name = "Uday";

  function inner() {
    console.log(name);
  }

  inner();
}
outer();


What happens here?
inner() is defined inside outer()
Because of lexical scope, inner() can access name
Output: Uday



✅ Even though name is not inside inner(), JavaScript looks upward in the code structure.
Scope Chain (How JS Searches Variables)

JavaScript looks for variables in this order:
Local scope
Parent (outer) scope
Global scope

If not found → ❌ ReferenceError


Example Showing Lexical Scope Clearly
let x = 10;

function test() {
  let y = 20;
  console.log(x); // accessible
}
test();

Output:10


But the opposite is ❌ not allowed:

function test() {
  let y = 20;
}

console.log(y); // Error



Lexical ≠ Dynamic Scope
JavaScript uses lexical scope, not dynamic scope.

let a = 100;
function show() {
  console.log(a);
}
function run() {
  let a = 50;
  show();
}
run();

Output:100



**Difference between this and window in JavaScript

window:
It is the global object in the browser
Created automatically by the browser
Variables declared with var become part of window
var a = 10;
console.log(window.a); // 10

this:
this refers to the current context
Its value changes depending on how a function is called
console.log(this === window); // true (in global scope, non-strict mode)

Key Differences (Very Short)
this                |    	window
Keyword	            |        Global object
Context-dependent   |	Always same (browser)
Can refer to object,window, or undefined  |  Refers only to browser window

Example Difference:

function test() {
  console.log(this);
}
test(); // window (non-strict)
let obj = {
  name: "JS",
  show() {
    console.log(this.name);
  }
};
obj.show(); // "JS"

Here, this → obj, not window.