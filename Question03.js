// Write a program to find the simple interest.
// Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

const readLine = require('readline-sync');
let principleInterest = parseInt(readLine.question("Enter the principle interest amount\n"));
let interest = parseFloat(readLine.question("Enter the interest rate\n"));
let numberOfYears = parseFloat(readLine.question("Enter the Number of years\n"));

console.log(`The simple interest is ${(principleInterest*interest*numberOfYears)/100}`);