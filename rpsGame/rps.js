//rock paper scissor game

//assumptions
//user choice accept 
//computer choice generate through random
//compare
//output winner
//play again or quit gae

//base condition for winner
//1)rock can break scissor => rock wins
//2)paper can wrap rock => paper wins
//3)scissor can cut paper => scissor wins

let winner;
function rpcGame(){

    console.log("welcome to the Game let's play:")
    
    window.alert("choose approperiate choice:")
    const userChoiceprompt = prompt("Enter rock paper scissor:");

    let userChoice = userChoiceprompt.toLowerCase();

    let computerChoice;

    //to generate random number: Math.random() it gives number in decimal
    //to scale multiple it by higher threeshild vlue i.e end range nummber
    //it also gives a decimal number interms 1.5983570067 
    //to round the number this all thing in Math.floor( number)+1

    const randomNumber = Math.floor(Math.random()*3)+1
    switch(randomNumber){
        case 1:
            computerChoice = "rock";
            break;

        case 2:
            computerChoice = 'paper';
            break;

        case 3:
            computerChoice = 'scissor'
            break;

        default:console.log("invalid number")
    }

     
    console.log("user selected choice:",userChoice)
    console.log("computer selected choice:",computerChoice)

    if((userChoice==='rock' && computerChoice==='scissor')||
       (userChoice==='paper' || computerChoice==='rock')||
        (userChoice==='scissor' && computerChoice==='paper'))
        {
            console.log("user win ..")
            winner = "user"

        }
        else if(userChoice===computerChoice){
            console.log("game is Tie")
            winner = "no winner game is Tie"
        }
        else if((userChoice==='rock' && computerChoice==='paper')||
       (userChoice==='paper' || computerChoice==='scissor')||
        (userChoice==='scissor' && computerChoice==='rock')){
            console.log("computer wins")
            winner = "computer"
        }
        else{
            console.log("invalid choice | condition please check the input")
        }


        let userdiv =  document.querySelector('#user');
console.log(userdiv);

userdiv.innerHTML = userChoice;


let computerdiv =  document.querySelector('#computer');
console.log(computerdiv);

computerdiv.innerHTML = computerChoice;

let resultdiv = document.querySelector("#winner");
console.log(resultdiv)
resultdiv.innerHTML = winner
 }
rpcGame(); 
//  let flag = true
//  while(flag){

//    let opt = prompt("you want to play again:(y|n)")
//    let opt1 = opt.toLocaleLowerCase()

//    if(opt1==='y'){
//     rpcGame(); 
//     flag = true
//    }
//    else if(opt1==='n'){
//     flag = false
//    }
   
//  }



