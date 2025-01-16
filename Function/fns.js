// Function - function is a block of code to perform particular operations
//To execute the fns  we need to call --> fnsName() //Calling the fns

// To pass value --> fnsName("Value1","value2","value3")// Argument 

// To get the value --> Parameter ;
// Arrow Function ==>Es6 

function fnsName() {
    // logic - 
}

//Function Decleration
function greet(a) { // paramater
    console.log("Welcome to Function" + " " + a)
}
greet("class"); // calling the function;
//Argument
function add(a, b) {  //parameter
    console.log(a + b)//  
}
add(3, 10) // argument


//Function Expression
// Anonomous Function


let myClass = function (cls) { // 
    console.log("Welcome to " + cls + " " + "Class")
}
myClass("React js"); // calling the function;

// Function With return

function multiply(a, b) {
    return a * b
}
// console.log(multiply(3, 4))
let res = multiply(3, 4);
console.log(res);

//Arrow Function:
// let myFs=()=>{
//   // logic   
// }

// let myFns = () => {
//     console.log("Arrow Function" );
// }
// let myFns = () => console.log("Arrow Function");


// let myFns = () => {
//     return "Arrow Function"
// }



// let myFns = () => "Arrow Function"



let myFns = (a) => {
    // console.log("Command " + a);

    //Template Literals :  `${}`
    console.log(`Command ${a}`)

    // console.log("Command " + a);
    console.log("Command 2")
    return "Arrow Function";
}

myFns("line")
console.log(myFns(" Line Interface"))








