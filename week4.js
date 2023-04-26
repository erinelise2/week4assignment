let newArray = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(newArray)

// creating new array. Arrays have [].
let subtractProblem = (newArray[newArray.length-1]) - newArray[0];
console.log(subtractProblem); // subtracting the last element from the first element.

newArray.push(36); // adds new age to the end of the array
console.log(newArray); // verifying new age was added
subtractProblem = (newArray[newArray.length-1]) - newArray[0];
console.log(subtractProblem); // running big array function to ensure it is dynamic.

for (let i = 0; i < newArray.length; i++) {
  
} // creating a loop to iterate through the array. Calculating the average
console.log()