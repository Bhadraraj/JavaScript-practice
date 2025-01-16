// 1. Using  If Else Statement  Find the number is positive or  zero or is negative.

// let user = -1;

// if (user > 0) {
//     console.log("number is positive");
// }
// else if (user == 0) {
//     console.log("number is zero");
// }
// else {
//     console.log("number is negative");
// }


// 2. Create a simple password input validation using a do-while loop. Ask the user to enter  password, and keep prompting them until the entered password matches a predefined  correct password.

// const correctPassword = 'secure123';

// do {
//     // var userPassword = prompt('Enter password:');
// var userPassword = 'secur123';

//     if (userPassword === correctPassword) {
//         console.log('Access granted. Welcome!');
//         break;

//     } else {
//         console.log('Incorrect password. Please try again.');
//         break;
//     }
// } 
// while (true);



// 3. Implement a "Guess the Number" game using a while loop. Generate a random  number between 1 and 100, and let the user guess the number. Provide feedback on  whether the guess is too high, too low, or correct

// const secretnumber = Math.floor(Math.random() * 100) + 1;
// console.log(secretnumber);
// let userguess;
// while (userguess !== secretnumber) {
//     // userguess = prompt("type number")
//     userguess =99;
//     if (userguess > secretnumber) {
//         console.log("number grater");
//         break
//     }
//     else if (userguess < secretnumber) {
//         console.log("number less");
//         break
//     }
//     else{
//         console.log("Equal");
//         break
//     }
// }


// 4. Print Multiplication Table using For loop

// let table = 1;
// for (i = 1; i <= table; i++) {
//     for (j = 1; j <= 10; j++) {
//         result = i * j;
//         console.log(`${j} x ${i} = ${result}`);
//         //Template Literals
//     }
// }


// 5. Create an object with various properties and use a for...in loop to iterate over its properties and log their values

// const person = {
//     firstName: 'ragesh',
//     lastName: 'rocky',
//     age: 30,
// };

// for (let x in person) {
//     console.log(`${x}:${person[x]}`);
// }


// 6. Calculate the sum of all elements in an array using a for...of loop

// const numbers = [1,2,3,4,5];
// let result=0;
// for(num of numbers){
//     result+=num
// }
// console.log(result);


// 7. Create a program that takes a user's first name and last name as input, then uses the concat() method to concatenate them and displays the full name

// const first = "Ragesh";
// const second = "Rocky";

// let fullname = first.concat(" "+second);
// console.log(fullname);


// 8. Write a program that takes a sentence as input and converts it to uppercase using the toUpperCase() method.

// let name = "ragesh";

// let upper = name.toUpperCase();
// console.log(upper);

// 9. Similar to the previous task, create a program that converts a sentence to lowercase using the toLowerCase() method.

// let name = "RAGESH";

// let lower = name.toLowerCase();
// console.log(lower);

// 10. Write a program that takes a word as input and finds its middle character using the charAt() method

// let word = "ragesh";

// let middle = Math.floor(word.length/2);
// let middleCharacter = word.charAt(middle);
// console.log(middleCharacter);

// 11. Create a program that takes a sentence as input and extracts a substring based on user-defined start and end indices using the substring() method.

// const sentence ="Hello world!";

// const startIndex = 1;
// const EndtIndex = 4;

// const wordSubstring = sentence.substring(startIndex, EndtIndex);
// console.log(wordSubstring);
// console.log(sentence);

// 12. Write a program that takes a sentence and a target word as input, then uses the indexOf() method to find the position of the target word in the sentence.

// const sentence = "words";
// const targetWord = "r";

// const position = sentence.indexOf(targetWord);
// console.log(position);

// 13. Write a program that takes a full URL as input and uses the slice() method to extract and display the path part of the URL.

// 14. Create a program that takes a sentence as input, asks the user for a word to replace, and another word to replace it with using the replace() method.

// const sentence = "Hello world!";
// const wordToReplace = "world";
// const replacementWord = "Bro";
// console.log(sentence);
// const modifiedSentence = sentence.replace(wordToReplace,replacementWord);
// console.log(modifiedSentence);

// 15. Write a program that takes a sentence as input and uses the split() method to count the number of words in the sentence

// const sentence = "wor_d_is_n_ot";
// const wordsArray = sentence.split("_");
// console.log(wordsArray);
// const wordCount = wordsArray.length;
// console.log("Number of words in the sentence:", wordCount);

// 16. Create a program that takes a username as input and uses the trim() method to remove leading and trailing whitespaces.

// let username = "      rocky"
// let result = username.trim();
// console.log(result);

// 17. Write an alternative program to find the first character of a word using the charAt() method.

// let text = "HELLO WORLD";
// let letter = text.charAt(0);
// console.log(letter);

// 18. Create a program that takes a URL as input and uses the endsWith() method to check if it ends with ".com".

// let text = "Hello world";
// let result =  text.endsWith("world");
// console.log(result);

// ................................Array methods........................................//

// 1. Create a program that simulates a shopping list. Allow users to add items to the list using the push() method and display the final list

// var shoppingList = [];

// while (true) {
//     var newItem = 'gggg';

//     if (newItem.toLowerCase()) {
//         shoppingList.push(newItem);
//         break;
//     }

// }
// console.log("Your Shopping List:"+shoppingList);

// for (var i = 0; i < shoppingList.length; i++) {
//     console.log((i + 1) + ". " + shoppingList[i]);
// }

// 2. Write a program that uses the pop() method to remove the last item from an array and displays the updated array.

// var myArray = ["Item1", "Item2", "Item3", "Item4"];

// console.log("Original Array:", myArray);
// var removedItem = myArray.pop();
// console.log("Updated Array:", myArray);
// console.log("Removed Item:", removedItem);

// 3. Create a program that removes the first item from an array using the shift() method and displays the updated array.

// var myArray = ["Item1", "Item2", "Item3", "Item4"];

// console.log("Original Array:", myArray);
// var removedItem = myArray.shift();
// console.log("Updated Array:", myArray);
// console.log("Removed Item:", removedItem);

// 4. Write a program that simulates a bookshelf. Allow users to add a book to the beginning of the bookshelf array using the unshift() method.

// var bookshelf = ["Book1", "Book2", "Book3", "Book4", "Book5"];

// console.log("Original Bookshelf:", bookshelf);

// var newBook = "yfg";

// bookshelf.unshift(newBook);

// console.log("Updated Bookshelf:", bookshelf);

// 5. Create a program that uses the splice() method to remove elements from an array and insert new ones at a specific position.

// const months = ['Jan','Feb', 'March', 'April', 'June'];
// console.log(months);
// months.splice(4, 1,'May');
// console.log(months);

// 6. Write a program that uses the map() method to convert an array of temperatures from Celsius to Fahrenheit.

// (9/5 × °C) + 32.



let temperature = [25, 35, 45, 55]// celsius

let toFahrenheit = temperature.map(a => a * (9 / 5) + 32)

console.log(toFahrenheit);




// 7. Write a program that uses the filter() method to create a new array containing only the even numbers from an existing array.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = numbers.filter(number => number % 2 === 0);
// console.log(result);

// 8. create a program that uses the find() method to search for a specific element in an array and display it.

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element );

// console.log(found);

// const array1 = [5,9, 12, 8, 130, 44];

// const found = array1.find((element) => element > 7);

// console.log(found);
// Expected output: 12


// 9. Write a program that uses the every() method to check if all numbers in an array are positive.

// function areAllPositive(numbers) {
//     return numbers.every(num => num > 0);
// }
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, -2, 3, 4, 5];

// console.log(areAllPositive(array1));
// console.log(areAllPositive(array2));

// 10. Create a program that uses the some() method to check if there is any negative number in an array.

// function areAllPositive(numbers) {
//     return numbers.some(num => num < 0);
// }
// const array3 = [1, 2, 3, 4, 5];
// const array4 = [1, -2, 3, 4, 5];

// console.log(areAllPositive(array3));
// console.log(areAllPositive(array4));

// 11. Write a program that uses the reduce() method to calculate the sum of all elements in an array.
let nums = [1, 2, 3, 4, 5, 6];

let addedVal = nums.reduce((a, b) => a + b);

console.log(addedVal)


// 12. Create a program that uses the forEach() method to display each element in an array along with its index.

// const myArray = ['apple', 'banana', 'orange', 'grape'];
// myArray.forEach((element, index) => {
//     console.log(`${index}. ${element}`);
// });

// 13. Write a program that declares a function calculate
//which takes two numbers and an operation as arguments (e.g., add, subtract, multiply, divide)
// and returns the result.

// function calculate(a, b, optr) {
//     if (optr == 'add') {
//         console.log(a + b)
//     }
//     else if (optr == 'sub') {
//         return a - b
//     }
//     else if (optr == 'multiply') {
//         console.log(a * b)
//     }
//     else {
//         console.log(a / b)
//     }

// }

// console.log(calculate(10, 5, 'add'));

// 14. Create a program that defines a function expression square which takes a number as an argument and returns its square.

// const square = function (number) {
//     return number * number;
// };
// const result = square(5);
// console.log(result);

// 15. Write a program that uses an arrow function calculateArea to calculate the area of a circle given its radius.
// const calculateArea = (radius) => 3.14 * (radius ** 2);
// console.log(calculateArea(4))