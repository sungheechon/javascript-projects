let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () { return Math.floor(11 * Math.random()) }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () { return Math.floor(11 * Math.random()) }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () { return Math.floor(11 * Math.random()) }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () { return Math.floor(11 * Math.random()) }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () { return Math.floor(11 * Math.random()) }
};


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];
//// console.log(crew);

// Print out the relevant information about each animal.
function crewReports(crewArr) {
   let crewInfo = [];
   for (let i = 0; i < crewArr.length; i++) {
      let animalName = crewArr[i].name;
      let animalSpecies = crewArr[i].species;
      let animalMass = crewArr[i].mass;
      let animalAge = crewArr[i].age;
      let animalAstronautID = crewArr[i].astronautID;
      crewInfo.push(`${animalName} is a ${animalSpecies}. They are ${animalAge} years old and ${animalMass} kilograms. Their ID is ${animalAstronautID}.`);
   }  
return crewInfo;
}

console.log(crewReports(crew));

// Start an animal race!

function fitnessTest(crewArr) {
   let fitnessResults = [], numSteps, turns;
   for (let i=0; i < crewArr.length; i++) {
      numSteps = 0;
      turns = 0;
      while(numSteps < 20) {
         numSteps += crewArr[i].move();
         turns++;
      }
      fitnessResults.push(`${crewArr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return fitnessResults;
}

console.log(fitnessTest(crew));