/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//I don't understand what needs to be fixed from this phrase, it looks ok to me
let result = "5" - 2; // this is the original code
console.log("The result is: " + result); // this is the original code
console.log("The type of variable that 'result' is below:"); // added to clarify the meaning of the return of the next line
console.log(typeof result); // I added this line to demonstrate that this variable is already a number, converted implicitly

console.log();

let isValid = Boolean(false); // I updated this to the correct Boolean expression removing the quotation marks
if (isValid) { //this is the original code
    console.log("This is valid!"); //nothing displays from this command because the variable now reads false correctly
} else {
    console.log("This is invalid")  // added to show that the console is reading the 'false' return
} ;
console.log("The type of variable that 'isValid' is below:"); // added to clarify the meaning of the return of the next line
console.log(typeof isValid); // showing type of variable as Boolean as intended.

console.log();

//below is now cleaned and converted to correct variable type
let age = "25"; // this is the original code
let totalAge = age + 5; // this is the original code
console.log("Total Age: " + totalAge); // this is the original code

let ageNum = Number(age); // this converts the figure in the age variable to a number, which can then be added
let updatedTotalAge = ageNum + 5; // this updates the total age calculation to use the updated variable ageNum
console.log("Corrected Age: " + updatedTotalAge); // this line uses the updated total calculation and inserts it into the desired phrasing
console.log("The type of variable that 'ageNum' is below:"); // added to clarify the meaning of the return of the next line
console.log(typeof ageNum); // added to show what type of variable this is
console.log("The type of variable that 'updatedTotalAge' is below:"); // added to clarify the meaning of the return of the next line
console.log(typeof updatedTotalAge); // added to show what type of variable this is

console.log();

console.log("This is my example of implicit conversion"); //my example of implicit conversion
let implicitStringConversion = "1313"; // this is the original variable, set as a String type
console.log("The type of variable that 'implicitNumberConversion' is below:"); // clarifying the return in the below line
console.log(typeof implicitStringConversion); //this is the type of the original variable
let convertedToNumber = implicitStringConversion - 303; // this is the line that implicitly converts the variable to a number through mathematics
console.log("Implicit number minus 303 equals: " + convertedToNumber); // this is what the new variable returns in the console
console.log("The type of variable that 'convertedToNumber' is below:"); // clarifying the return of the next line
console.log(typeof convertedToNumber); // shows the type of the new variable

console.log();

console.log("This is my example of explicit conversion"); //my example of explicit conversion
let explicitNumberConversion = 8675309; // this is the original variable, set as a number type
let convertedNumber = String(explicitNumberConversion); // this is the explicit conversion to string
console.log("The value of the convertedNumber is " + convertedNumber); // this displays the return of the new variable
console.log("The type of variable that 'explicitNumberConversion' is below:"); // clarifying the return in the below line
console.log(typeof explicitNumberConversion); // shows the type of the original variable
console.log("The type of variable that 'convertedNumber' is below:"); // clarifying the return of the next line
console.log(typeof convertedNumber); // shows the type of the new variable

console.log();

console.log("This is my example of edge case");//my example of edge case, like NaN, undefined, or null 
let iDontLikeVariables = null;
console.log("The type of variable that 'iDontLikeVariables' is below:"); // clarifying the return of the next line
console.log(typeof iDontLikeVariables); // shows the type of the new variable
console.log("The variable 'iDontLikeVariables' returns the below value:"); // clarifies the next line
console.log("The value of 'iDontLikeVariables' is: " + iDontLikeVariables); // shows the value of the original variable
console.log("The variable 'iDontLikeVariables' when evaluated for true/false conditions returns the below:"); // clarifies the next line
console.log(Boolean(iDontLikeVariables)); //this returns false as expected from an undefined variable
if (iDontLikeVariables) { //this is testing the BooleanValue
    console.log("This is an awesome number!"); //nothing displays from this command because the variable now reads false correctly
} else {
    console.log("This is not a valid entry")  // added to show that the console is reading the 'false' return
} ;
