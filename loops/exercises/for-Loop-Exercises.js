/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

// #1 - a. Print the numbers 0 - 20, one number per line.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}


// #1 - b. Print only the ODD values from 3 - 29, one number per line. 
for (let i = 3; i <= 29; i+=2) {
  console.log(i);
}


// #1 - c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
for (let i = 12; i >= -14; i-=2) {
  console.log(i);
}

// #1 - d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers).


for (let i = 50; i >= -20; i--) {
  if (i % 3 === 0) {  // Use modulus to find IF the number is a multiple of 3 or not
    console.log(i);
  }
}



/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

// #2 
let strOne = "LaunchCode";
let arrayOne = [1, 5, "LC101", "blue", 42];

// #2 - a
for (let i = 0; i < arrayOne.length; i++) {
  console.log(arrayOne[i]);
}

// #2 - b
for (let i = strOne.length-1; i >= 0; i--) {
  console.log(strOne[i]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

// #3
let arrExercise = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];

// #3 - a
let evens = [];
let odds = [];

 // display Evens here
for (let i = 0; i < arrExercise.length; i++) {
  if (arrExercise[i] % 2 === 0) {
    evens.push(arrExercise[i]);
  }
}
console.log(evens);

  // display Odds here
for (let i = 0; i < arrExercise.length; i++) {
  if (arrExercise[i] % 2 === 1 || arrExercise[i] % 2 === -1) {
    odds.push(arrExercise[i]); 
  }
}
console.log(odds);




