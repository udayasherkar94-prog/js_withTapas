// task1) What will be the output of this code snippet and why?
//expected output It's a normal day
//because there is not matching case 'M' is capital 

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

//task2). Build an ATM Cash Withdrawal System
let amount = 101
if(amount%100===0){
    console.log("Withdrawal successful")
}
else{
    console.log("invalid choice")
}

//task3)Build a Calculator with switch-case

let oprator = "/"
let a =5;
let b =5;
switch(oprator){
    case "+":
      console.log(a+b,":addition")
      break;

    case "-":
        console.log("subtraction :",a-b)
        break;
    
    case "*":
        console.log("Multiplication:",a*b);
        break;

    case "/":
        console.log("division :",a/b);
        break;

    case "%":
        console.log("Reminder :",a%b);

    default:console.log("invalid choice");

}

//task 4)Pay for your movie ticket
let age =19;
if(age<18){
    console.log("price :$3");
}
else if(age<60 && age>=18){
    console.log("price:$10")
}
else if(age>=60 ){
    console.log("price:$8");
}

//task5 Horoscope Sign Checker

// Default month
let month = "April";

// Determine zodiac sign using switch
let zodiac;

switch(month) {
  case "March":
  case "April":
    zodiac = "Aries";
    break;
  case "May":
  case "June":
    zodiac = "Taurus";
    break;
  case "July":
  case "August":
    zodiac = "Gemini";
    break;
  case "September":
  case "October":
    zodiac = "Cancer";
    break;
  case "November":
  case "December":
    zodiac = "Leo";
    break;
  case "January":
  case "February":
    zodiac = "Aquarius";
    break;
  default:
    zodiac = "Unknown month";
}

console.log("Your Zodiac Sign is:", zodiac);

//Which Triangle?
let s1 = 20
let s2 = 10
let s3 = 15

if(s1 === s2 && s2 === s3) {
    console.log("Equilateral Triangle");
} else if(s1 === s2 || s2 === s3 || s1 === s3) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}
