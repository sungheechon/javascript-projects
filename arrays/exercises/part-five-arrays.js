let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str); // Print as it is
console.log(str.split()); //String to Array
console.log(str.split("e")); //String to Array divided where "e" was
console.log(str.split(" ")); //String to Array divided where " " was
console.log(str.split("")); //Every character as its own element

//2) Use the join method on the array to identify the purpose of the parameter inside the (). CONNECTOR
console.log(arr.join());
console.log(arr.join("a"));
console.log(arr.join(" "));
console.log(arr.join(""));

//3) Do split or join change the original string/array? NO
console.log(str);
console.log(arr);

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(",").sort().join(","));

