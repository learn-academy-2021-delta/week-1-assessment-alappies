//ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

 // --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

//Psuedo Section:
 // First start by creating a variable named "temp".
// Then log "temp".
// Then go on to create an "if" statement and in the parentheses() State if temp is greater than 212 and close parentheses.
// Then open up a curley bracket and inside start a console log and in parentheses, and quotes State "above boiling point."
// Then Create an "else if" statement and in () I would state if temp is === 212 curly brackets console log and in quotes put "at the boiling point."
// Then start and "else" statement and
// Open up another curly bracket and in the bracket do another console log and in parentheses and quotes state "bellow boiling point"
//

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 35
var temp = 350
var temp = 212

var temp = 35
console.log(temp);
if(temp > 212){
console.log("is above boiling point");
} else if(temp === 212){
console.log("is at the boiling point")
} else {
console.log("bellow boiling point")
}

// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

//Psuedo section:
// Start by creating "variables" for numbers 3, 7, 0, and -9 loging each one individually as you go.
// Then create an "Array" by creating a variable named "myNumbers1" equals and inside [] brackets, all the number variables you created.
// The "rinse and repeat" for the second set of variables.
// once both "Array's" have been created, create a "concatenation" of both "Array's" by qwriting console.log parentheses array number 1 dot concat parentheses array number 2.
// Then start another consol.log and in parenthese add array number 1 dot length plus another set of parenthese array number 2 dot length close both parenthese.

 // var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 22, 9, 13]

var num1 = "3"
console.log(num1 = "3");
var num2 = "7"
console.log(num2 = "7");
var num3 = "0"
console.log(num3 = "0");
var num4 = "36"
console.log(num36 = "36");
var num5 = "-9"
console.log(num5 = "-9");
var myNumbers1 = [num1, num2, num3, num4, num5]
console.log(myNumbers1);

var num6 = "8"
console.log(num1 = "3");
var num7 = "7"
console.log(num2 = "-7");
var num8 = "0"
console.log(num3 = "22");
var num9 = "36"
console.log(num36 = "9");
var num10 = "13"
console.log(num10 = "13");
var myNumbers2 = [num6, num7, num8, num9, num10]
console.log(myNumbers2);

console.log(myNumbers1.concat(myNumbers2));
console.log(myNumbers2.length + (myNumbers1.length));



 // --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

//Psuedo Coding:
//Create variables for each one of the letters in "charlie". and console log each one.
//Create an "Array" that includes each letter variable and the log it.
//Reverse the "Array" by writing myArray dot reverse parenthese.
//Then create a variable myString1 equals myArray1 and change it into a string (I think that's what this function did, I looked it up on the interwebs and applied it here).
//Then creat a variable myString equals myArray1 dot join to join all the characters together.
//The "rinse and repeat" for myString2 "delta"

// var myString1 = "charlie"
// var myString2 = "delta"

//
var myLett1 = "c"
console.log(myLett1);
var myLett2 = "h"
console.log(myLett2);
var myLett3 = "a"
console.log(myLett3);
var myLett4 = "r"
console.log(myLett4);
var myLett5 = "l"
console.log(myLett5);
var myLett6 = "i"
console.log(myLett6);
var myLett7 = "e"
console.log(myLett7);

var myArray1 =[myLett1, myLett2, myLett3, myLett4, myLett5, myLett6, myLett7];


myArray1.reverse();
//console.log(myString1);

var myString1 = myArray1.join('');
console.log(myString1);


var myString2 = "delta";
console.log(myString2);
//
var myLetter1 = "d"
console.log(myLetter1);
var myLetter2 = "e"
console.log(myLetter2);
var myLetter3 = "l"
console.log(myLetter3);
var myLetter4 = "t"
console.log(myLetter4);
var myLetter5 = "a"
console.log(myLetter5);

var myArray2 = [myLetter1, myLetter2, myLetter3, myLetter4, myLetter5]
console.log(myArray2);

myArray2.reverse();
console.log(myString2);

var myString2 = myArray2.join('');
console.log(myString2);

//
// // --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

// Create variables for number1 = 42, and number2 = 27
// Create an "if" statement and in parenthese write if number1 is greater than number2 close parenthese, open curly brackets and write number1 subracted by number2. close curly brackets.
// The create an "else" statment and open curly brackets and write a console log number2 minus number1.
// Then rinse and repeat for the next set of variables.

// var number1 = 42
// var number2 = 27

var numb1 = 42
console.log(numb1);

var numb2 = 27
console.log(numb2);

if(numb1 > numb2){
  console.log(numb1 - numb2);
} else {
  console.log(numb2 - numb1);
}
//
// // var number1 = 7
// // var number2 = 19

var num1 = 7
console.log(num1);

var num2 = 19
console.log(num2);

if (num1 > num2) {
  console.log(num1 -num2);
} else {
  console.log(num2 - num1);
}
// // //
// //
// // // --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

//In theory, I would have copied and pasted my code from number 4
//I tried multiple ways (I've only logged 2) to incorperate the function "".isNaN" into the elseif and else statments but I wasn't receiving a proper return. I was thinking of using an else statement that said "else(numb2 == "hello") curly { console.log( "Your input is not a number")}. But I know that would give me the correct outcome but not in the desired method. To be honest, I worked this weekend, hosted a birthday party for my child and then went to Disnyland for his Birthday. This was the most I could get out of this equation.

// // var numberRefactor1 = 42
// // var numberRefactor2 = "hello"

var numb1 = 42
console.log(numb1);
//
var numb2 = "hello"
 console.log(numb2);
//
 if(numb1 > numb2){
 console.log(numb1 - numb2);
}
 console.log("Your input is not a number");
}
else{
   console.log(numb2.isNaN("Your input is not a number."))
}

var numberRefactor1 = 27
var numberRefactor2 = 24

var numberRefactor1 = 27
console.log(numberRefactor1);
var numberRefactor2 = 24
if(numberRefactor1 > numberRefactor2){
console.log(numberRefactor1- numberRefactor2);
 console.log(numberRefactor2 - numberRefactor1);
}
