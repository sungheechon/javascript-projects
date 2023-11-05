const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`Changed the "${str}" to "${newStr}" by removing the first 3 characters and adding to the end.`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userInputNum = input.question("Enter the number of letters to be relocated: ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInputNum > str.length) {
    console.log(`Your number, "${userInputNum}" is longer than the word, "${str}" which has "${str.length}" letters. So it's defaulted to moving 3 characters to the end. "${newStr}".`)
} else if (userInputNum < 1) {
    console.log(`Your number, "${userInputNum}" is not a valid number. So it's defaulted to moving 3 characters to the end. "${newStr}".`)
}
else {
    let userInputStr = str.slice(userInputNum) + str.slice(0, userInputNum);
    console.log(`You asked for "${userInputNum}" of the letters to be moved. The word, "${str}" is now changed to "${userInputStr}".`)
}
