// Question 1: 
let newArray = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(newArray)

// creating new array. Arrays have [].
let subtractProblem = (newArray[newArray.length-1]) - newArray[0];
console.log(subtractProblem); // subtracting the last element from the first element.

newArray.push(36); // adds new age to the end of the array
console.log(newArray); // verifying new age was added
subtractProblem = (newArray[newArray.length-1]) - newArray[0];
console.log(subtractProblem); // running function to ensure it is dynamic.

// creating a loop to iterate through the array. Calculating the average
function average(newArray) {
    let arraySum = 0
    for (let i = 0; i < newArray.length; i++) {
        arraySum += newArray[i];
    }
        console.log(arraySum / newArray.length); 
} 
average(newArray);
// to call a function, simply type the function name. You do not need to type console.log for this.

// Question 2:
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"] // creating an array of names
console.log(names); // printing new array to the console.

// Question 2a:
// developing a loop to target the elements in the array, and then an inner loop to find the length of each element.
let nameLetters = 0; 
    for (let i=0; i < names.length; i++) { // outer loop
        for (let j=0; j<names[i].length; j++) { // inner loop
            nameLetters = nameLetters + 1;
        }
    } console.log("Name length: " + nameLetters); // total letters in all names

console.log(nameLetters/names.length); // average of the total letters divided by total names

// Question 2b:
// creating a loop to concatenate all names together (spaces in between)

let nameTogether = "";
for (let i = 0; i < names.length - 1; i++) {
    nameTogether += names[i] + ", ";
} nameTogether += names[names.length-1];

console.log(nameTogether); // printing concatenated list to the console.

// Question 3:
console.log(names[0]); //prints first element in array

// Question 4:
console.log(names[names.length-1]); // prints last element in array 

// Question 5:
let nameLengths = []; // creating an array called nameLengths
for (let i = 0; i < names.length; i++) { //beginning of loop to find length of each name
    nameLengths.push(names[i].length);
} 
console.log(nameLengths); // printing array of name lengths

// Question 6:

let sumLengths = 0 // holding variable for sum of the name lengths
for (let i = 0; i < nameLengths.length; i++) {
        sumLengths += nameLengths[i];
    } 
    console.log(sumLengths); // printing sum of the name lengths to the console.

// Question 7:
let newString = "" // declaring holding variable for function
function questionSeven(word, n) { //creating a function to concatenate the word passed through n number of times.
         for (let i = 0; i < n; i++) {
            newString += word;
         }
        return newString; 
    }
   console.log(questionSeven("Hello", 3)); // printing "Hello" concatenated 3 times, no spaces.

// Question 8:

function fullName(firstName, lastName) { // creating a function with first and last name parameters
            return firstName + " " + lastName; // want to return the parameters with a space when called.
    }
console.log(fullName("Erin", "Brickman")); // printing function to the console with my name

// Question 9:
let newTestArray = [2, 7, 11, 23, 54, 87] // creating a random array
let newTestSum = 0 // holding variable to pass through function/loop

for (let i = 0; i < newTestArray.length; i++) { // loop to create the sum of array
    newTestSum += newTestArray[i];
} console.log (newTestSum);
    if (newTestSum > 100) { // if statements to ring true or false.
        console.log(true);
    } else {
         console.log(false); // I took out some numbers to see if it would return false, and it did
    }

// Question 10:
console.log(newTestSum / newTestArray.length); // this just calculates using the above parameters.

let question10Array = [2, 7, 11, 23] // creating a random array 
let question10Sum = 0 // holding variable to pass through function/loop

for (let i = 0; i < question10Array.length; i++) { // loop to create the sum of array
    question10Sum += question10Array[i];
} console.log (question10Sum);
console.log(question10Sum/question10Array.length);

// Question 11:
    if (newTestSum > question10Sum) { // if statement comparing my declared arrays
        console.log(true);
    } else {
        console.log(false);
    }

// Question 12: 
let isHotOutside = 0;
let moneyInPocket = 0;

function willBuyDrink (isHotOutside, moneyInPocket) { // function with parameters
    if (isHotOutside === true && moneyInPocket > 10.50) { // both must hold to print correct answer
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 9)); // returns false
console.log(willBuyDrink(true, 11)); // returns true
console.log(willBuyDrink(false, 11)); // returns false
// I created a function with an if else statement for the boolean and numerical return. 
// Testing out a few different parameters yielded expected results.

// Question 13: Creating my own function to solve a problem.
// I am not very creative with these. I created a function to determine if you should go running
// Basically you are only allowed to say no if you are injured.
// But if it is below 40ish degrees, I will normally opt out :)

function goRun (temperature, notInjured) { // function and parameters before else if loop
    if (temperature >= 40 && notInjured === true) {
        return "You can do it, go for a run!";
    } else if (temperature <= 39 && notInjured === true) {
        return "Add some layers and just go.";
    } else {
        return "Okay, rest up, and try something inside."
    }
}
console.log(goRun(41, true)); // returns "You can..."
console.log(goRun(41, false)); // returns "Okay, rest..."
console.log(goRun(32, true)); // returns "Add some..."
console.log(goRun(32, false)); // returns "Okay, rest..."