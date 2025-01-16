let myStr = "Welcome_the the";
// console.log(myStr.length) // returns the number of character and space 

// console.log(myStr.toLowerCase());
// console.log(myStr.toUpperCase());
// console.log(myStr.slice(1, 4)); // starting , ending index;
// console.log(myStr)
// let newValue = myStr.replace("the", "Students");
let newValue = myStr.replaceAll("the", "Students");
// console.log(newValue); // starting , ending index;

let myJio = "        7176786182681        ";
let myRes = myJio.length;
console.log(myRes)
// console.log(myJio.startsWith("6"))
// console.log(myJio.endsWith("7"));
// console.log(myJio.includes("9"));
// console.log(myStr.substring(0, 3))
// console.log(myStr)
// console.log(myStr.split("_"))
// let trimedVal = myJio.trim();

// let trimedVal = myJio.trimStart();
let trimedVal = myJio.trimEnd();
console.log(trimedVal.length);
let myNum = "123";
console.log(myNum.padStart(10, 0));
console.log(myNum.padEnd(10, 0));

