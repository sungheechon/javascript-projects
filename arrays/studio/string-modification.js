const input = require('readline-sync');
let str = "LaunchCode";
console.log(str.length);

let removedStr = str.slice(0, 3); // first 3 characters
let remainedStr = str.slice(3);  // - removedStr
let changedStr = remainedStr.concat(removedStr);
// new variable

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
console.log(changedStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${changedStr} does not make sense. It needs to be ${str}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userInputNumber = input.question("How many letters do we need to change? ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
// Number(userInputNumber);

if (Number(userInputNumber) > Number(str.length)) {
    console.log(changedStr);
    console.log(`Your number "${userInputNumber}" does not make sense. It needs to be less than ${str.length}.`);
} 