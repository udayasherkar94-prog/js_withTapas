//console.log(test())  test is not a function why because here test variable value is undefined
// undefined ()  =>typeerror


// console.log(test)  no error but undefined

// var test = function(){
//     console.log("hoistiong of function expression")
// }

// console.log(test) //output as [function:test]
// console.log(test())//no error o/p: hoisting of function expression ,undefined



// let name = "ajit"
// var n = 10
// console.log(name)


const arr =[1,11,22,330,0]
console.log(arr)
console.log(...arr)

let num = [...arr].join("|")
console.log(num)

