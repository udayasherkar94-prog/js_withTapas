//task1)  Write a Function to Convert Celsius to Fahrenheit
//(Celsius * 9/5) + 32 = Fahrenheit

function calculate(Celsius){
    let Fahrenheit = (Celsius*9/5)+32;
    return Fahrenheit;
}

console.log(` Fahrenheit:${calculate(50)}`)

//task2) Create a Function to Find the Maximum of Two Numbers

function max(num1 ,num2){
    // if(num1>num2){
    //     return num1
    // }
    // else{
    //     return num2;
    // }

    num1 > num2 ? console.log(`maximum: ${num1}`):console.log(`maximum: ${num2}`)
}

max(10,30)

//task3)  Function to Check if a String is a Palindrome
//originalStr === reversedStr

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
}

console.log("this string is palindrome:"+isPalindrome("level")); // true

//task5)Write a Function to Find Factorial of a Number
let fact = 1
function funfact(num){
    for(let i=1;i<=num;i++){
        fact = fact*i
    }

    return fact;
}

console.log("factorial:"+funfact(5))

//task6) Write a function to Count Vowels in a String
let count = 0;
function countVowels(str){
for(let i=0;i<str.length;i++){
    if(str[i]==='a'|| str[i]==='e'|| str[i]==='i'|| str[i]==='o'|| str[i]==='u' && str[i]==='A'|| str[i]==='E'|| str[i]==='I'|| str[i]==='O'|| str[i]==='U' ){
        count++
    }
    
}
return count;
}

console.log(countVowels("Hello World")); // 3


function countVowels1(str) {//updated version
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count++;
        }
    }
    return count;
}

console.log(countVowels1("Hello World")); // 3


//task6) Write a Function to Capitalize the First Letter of Each Word in a Sentence

function toupper(str){
    return str.toUpperCase();
}
console.log(toupper("ajit"));

//tas7) Use an IIFE to Print “Hello, JavaScript!”
//always check the eairler line ends with ;(semicolon) then use IIFE function
(function(){
        console.log("Hello ,javaScript")
    })();


//task8)Create a Simple Callback Function

function greeting(name,callback){
    console.log("hello"+" "+name)
    callback();
}

greeting("ajit",function(){
    console.log("good night")
})