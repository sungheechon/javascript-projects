//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.


// Part One: Reverse Characters

// 1. Define the function as reverseCharacters. Give it one parameter, which will be the string to reverse.
// 2. Within the function, split the string into an array, then reverse the array.
// 3. Use join to create the reversed string and return that string from the function.
// 4. Below the function, define and initialize a variable to hold a string.
// 5. Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
// 6. Optional: Use method chaining to reduce the lines of code within the function.

let strTest1 = "apple";
let strTest2 = "LC101";
let strTest3 = "Capitalized Letters";
let strTest4 = "I love the smell of code in the morning.";
let strTest5 = 1234;
let strTest6 = "LC101";
let strTest7 = 8675309;
let strTest8 = "radar";

function reverseCharacters(element) {
    if (typeof element === "string") {
        return element.split("").reverse().join("");
    } else {
        return Number(String(element).split("").reverse().join(""));
    }

}
console.log(reverseCharacters(strTest1));
console.log(reverseCharacters(strTest2));
console.log(reverseCharacters(strTest3));
console.log(reverseCharacters(strTest4));
console.log(reverseCharacters(strTest5));
console.log(reverseCharacters(strTest6));
console.log(reverseCharacters(strTest7));
console.log(reverseCharacters(strTest8));


// Part Two: Reverse Digits

// 1. Add an if statement to reverseCharacters to check the typeof the parameter.
// 2. If typeof is ‘string’, return the reversed string as before.
// 3. If typeof is ’number’, convert the parameter to a string, reverse the characters, then convert it back into a number.
// 4. Return the reversed number.
// 5. Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.



// Part Three: Complete Reversal

// 1. Define and initialize an empty array.
// 2. Loop through the old array.
// 3. For each element in the old array, call reverseCharacters to flip the characters or digits.
// 4. Add the reversed string (or number) to the array defined in part ‘a’.
// 5. Return the final, reversed array.
// 6. Be sure to print the results from each test case in order to verify your code.
console.log("--------------"); //// create a line to be able to read the printed result easier

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];


function reverseElements(arrayElements) {
    let arrayReversed = [];
    for (i = 0; i < arrayElements.length; i++) {
        arrayReversed.push(reverseCharacters(arrayElements[i]));
    }
    return arrayReversed.reverse();
}

console.log(reverseElements(arrayTest1));
console.log(reverseElements(arrayTest2));
console.log(reverseElements(arrayTest3));

console.log("--------------"); //// create a line to be able to read the printed result easier

// Bonus Missions

// 1. Have a clear, descriptive name like funPhrase.
// 2. Retrieve only the last character from strings with lengths of 3 or less.
// 3. Retrieve only the first 3 characters from strings with lengths larger than 3.
// 4. Use a template literal to return the phrase We put the '___' in '___'. Fill the first blank with the modified string, and fill the second blank with the original string.


let BonusTest1 = "Functions rock!";
let BonusTest2 = "LS";

function makeFunPhrase(str) {
    let funPhrase;
    if (str.length <= 3) {
        funPhrase = str[str.length - 1];
    } else {
        funPhrase = str.slice(0, 3);
    }
    return `We put the '${funPhrase}' in '${str}'.`;
}
console.log(makeFunPhrase(BonusTest1));
console.log(makeFunPhrase(BonusTest2));

console.log("--------------"); //// create a line to be able to read the printed result easier

// Test Function

// 1. Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
// 2. Call your function and print the returned phrase.

// Area of rectangle equal to length x width

// 1. Define a function with the required parameters to calculate the area of a rectangle.
// 2. The function should return the area, NOT print it.
// 3. Call your area function by passing in two arguments - the length and width.
// 4. If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.
// 5. Use a template literal to print, “The area is ____ cm^2.”


function calculateRectangleArea(rectLength, rectWidth) {
    let rectangleArea;
    if (rectWidth === undefined) {
        rectangleArea = rectLength * rectLength;
    } else {
        rectangleArea = rectLength * rectWidth;
    }
    return `The are is ${rectangleArea}cm^2.`;
}

console.log(calculateRectangleArea(5));