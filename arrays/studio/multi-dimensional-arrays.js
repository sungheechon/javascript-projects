const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let splitDelimeter = ",";
let foodArray = food.split(splitDelimeter).sort();
let equipmentArray = equipment.split(splitDelimeter).sort();
let petsArray = pets.split(splitDelimeter).sort();
let sleepAidsArray = sleepAids.split(splitDelimeter).sort();
console.log(foodArray);
console.log(equipmentArray);
console.log(petsArray);
console.log(sleepAidsArray);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(foodArray, equipmentArray, petsArray, sleepAidsArray);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userSelectCabinet = input.question("Select a cabinet from 0 to 3: ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userSelectCabinet < cargoHold.length && userSelectCabinet > -1) {
    console.log(`
    You selected cabinet "${userSelectCabinet}: 
    ${cargoHold[userSelectCabinet].join(", ")}".`)
} else {
    console.log(`
    You selected an invalid number, "${userSelectCabinet}".`)
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
// userSelectCabinet = input.question("Select a cabinet from 0 to 3: ");
let userSelectItem = input.question("Select an item: ");
let conditionalText;


if (cargoHold[userSelectCabinet].includes(userSelectItem)) {
    console.log(`Cabinet "${cargoHold[userSelectCabinet]}" DOES contain "${userSelectItem}".`);
} else {
    console.log(`Cabinet "${cargoHold[userSelectCabinet]}" DOES NOT contain "${userSelectItem}".`);
}