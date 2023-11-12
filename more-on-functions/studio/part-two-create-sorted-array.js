function findMinValue(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...
function sortArr(nums) {
  let sortedNums = [];
  while (nums.length > 0) {
    let minNum = findMinValue(nums);
    sortedNums.push(minNum);
    nums.splice(nums.indexOf(minNum), 1);
  }
  return sortedNums;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(nums1);
console.log(sortArr(nums1));
console.log(nums2);
console.log(sortArr(nums2));
console.log(nums3);
console.log(sortArr(nums3));

console.log(nums1);
console.log(nums2);
console.log(nums3);

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */
let nums1b = [5, 10, 2, 42];
let nums2b = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3b = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function sortNumsRec(arr, sorted = []) {
  // Base
  if (arr.length === 0) {
    return sorted;
  }
  let min = findMinValue(arr);
  sorted.push(min);
  arr.splice(arr.indexOf(min), 1);
  return sortNumsRec(arr, sorted);
};

console.log(sortNumsRec(nums3b));

