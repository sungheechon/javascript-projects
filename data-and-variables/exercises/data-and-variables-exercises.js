// Declare and assign the variables below
let nameOfTheSpaceShuttle = "Determination";
let shuttleSpeed = 17500; //in mph
let distanceToMars = 225000000; //in km
let distanceToTheMoon = 384400; //in km
const milesPerKm = 0.621;


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfTheSpaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToTheMoon);
console.log(typeof milesPerKm);


// Calculate a space mission below
    // 1. Create and assign a miles to Mars variable.
    let milesToMars = distanceToMars * milesPerKm;

    // 2. Get a variable to hold the hours it would take to get to Mars.
    let hoursToMars = milesToMars / shuttleSpeed;

    // 3. Declare a variable and assign it the value of days to Mars.
    let daysToMars = hoursToMars / 24;


// Print the results of the space mission calculations below
console.log(nameOfTheSpaceShuttle + " will take " + daysToMars + " days to reach Mars.");



// Calculate a trip to the moon below
    // 1. Create and assign a miles to Moon variable.
    let milesToTheMoon = distanceToTheMoon * milesPerKm;

    // 2. Get a variable to hold the hours it would take to get to Moon.
    let hoursToTheMoon = milesToTheMoon / shuttleSpeed;

    // 3. Declare a variable and assign it the value of days to Moon.
    let daysToTheMoon = hoursToTheMoon / 24;


// Print the results of the trip to the moon below
console.log(nameOfTheSpaceShuttle + " will take " + daysToTheMoon + " days to reach the Moon.");