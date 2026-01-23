//task 1)Generate a Pyramid Pattern using Nested Loop as it is shown below:
let n = 5;
for (let i = 0; i < n; i++) {
    let row = ""; //row is empty string
    for (let j = 0; j <= i; j++) {
        row += "*";
    }
    console.log(row);//by default it added newline by every iteration
}

//task2) Craete Multiplication Table (Using for loop)

let num = 5;
for(let i=1;i<=10;i++){
    let table = num *i;
    console.log(`${num}*${i}:${table}`)
}

//task3)summation of all odd numbers from 1 to 500
let sum = 0;
for(let i=1;i<500;i=i+2){
    sum = sum +i;
}
console.log("summation of all odd numbers:",sum);

//task4)Skipping Multiples of 3

for(let i=1;i<=20;i++){
    if(i%3===0)continue;
    console.log(i)
}

//task5)  Reverse Digits of a Number (Using while loop)

let a = 1234;
let rev = 0;

while (a !== 0) {
    let rem = a % 10;
    console.log(`vlaue of remainder:${rem}`)
    rev = rev * 10 + rem;
    console.log(`updated value of reverse:${rev}`)
    a = Math.floor(a / 10);
    console.log(`updated value of num:${a}`)
}

console.log(rev); // 4321


//task6)
/*

for loop :Used when number of iterations is known Initialization, condition, update in one line
while loop :Used when iterations are not known Condition checked before loop runs
  while → checks first, then runs
  do-while → runs once, then checks
*/