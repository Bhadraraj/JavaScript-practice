let myArr = ["apple", "grapes", "mango", "Orange", "Papaya",];
let myArr2 = ["Orange", "Papaya"];
// myArr.push("pineapple")// adding the data at the end of the array
// myArr.pop()// remove the data at the end of the array


// myArr.unshift("fruit1", "fruits2 ");// adding the data at the starting of the array
// myArr.shift();// remove the data at the starting of the array
// myArr.splice(1, 2, "Fruits added 1", "Fruits added 2");// starting index, no of counts to delete 
// let res = myArr.slice(1, 2) // start index, end index
// console.log(res)
// console.log(myArr.concat(myArr2));//

// console.log(myArr.join(","));
// console.log(myArr);

let ReversedData = myArr.reverse() // revese 
console.log(ReversedData)

// Call back fns 
let nums = [5, 100, 54, 2, 12, 76, 1, 3, 7];
// let res = nums.sort((a, b) => a - b);
let res = nums.sort((a, b) => b - a);

console.log(res)



//Map --> Manipulate the data
// let res1 = nums.map((a) => a * 2)
// console.log(res1);


//Map --> Manipulate the data
// let res2 = nums.forEach((a) =>
// console.log(a * 4)
// )

console.log(res2);
let res3 = nums.every((a) => a % 2 == 0);
let res4 = nums.some((a) => a % 2 == 0);
let res5 = nums.filter((a) => a % 2 == 0);
let res6 = nums.find((a) => a % 2 == 0);

console.log(res6)
