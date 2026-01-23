// task1) odd or even

let num = 8
// if(num%2==0){
//   console.log(num +"\t is even number")

// }
// else{
//     console.log(num+"\tis odd number")
// }

num %2==0 ? console.log(` ${num} is even `): console.log(`${num}is odd`)

//task2)Do you have a Driving License?

let age = 16
if(age===18){
    console.log("your elligible for driving license")
}
else{
    console.log("you are not elligible for driving license")
}

//task4)Calculate CTC with a Bonus

let m_sal = 12300
let annualSalary = 12*m_sal;
let bonus = (20/100)*annualSalary;
let CTC = annualSalary + bonus ;

console.log("Monthly Salary:",m_sal)
console.log("annual Salary:",annualSalary)
console.log("anual bonus: ",bonus);
console.log("Cost To Company (CTS):",CTC);

//task5)Traffic Light Simulation
let color ="red";
switch(color){
    case 'red':
        console.log("stop");
        break;

    case 'green':
        console.log("go");
        break;

    default:console.log("invalit color")
}


//task5)Create an Electricity Bill Calculator
// assume Daily units = 5
// Monthly units = 5 × 30 = 150 units
// Monthly bill = 150 × 150 = 22,500 rupees
// Annual bill (without discount) = 22,500 × 12 = 270,000 rupees

let units = 5; // daily units consumed
let unitCost = 150;
let monthlyUnits = units * 30;
let monthlyBill = monthlyUnits * unitCost;
let bill = "annual"
// Monthly calculation
if(bill==="monthly"){
console.log("Monthly Bill:", monthlyBill);
}
else if(bill==="annual"){
// Annual calculation with discount
let annualBill = monthlyBill * 12;
let discount = annualBill * 0.20;
let finalAnnualBill = annualBill - discount;
console.log("Annual Bill after 20% discount:", finalAnnualBill);
}


//task6)Leap Year Checker

let year = 1996;

(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) 
    ? console.log(`${year} is a leap year`) 
    : console.log(`${year} is not a leap year`);

//task7)max of three
let a = 10
let b = 20
let c = 5

if(a>b){
    if(a>c){
        console.log(`${a} is max number`)
    }
    else{
        console.log(`${c} is max number`)
    }
}
else{
    if(b>c){
        console.log(`${b} is max number`)
    }
    else{
        console.log(`${c} is max number`)
    }
}

//task 8)Biwise Doubling
//double of 5 is 10
//5 << 1 → 5 × 2 = 10 (bitwise shift left)

let count = 5
console.log(count<<1)