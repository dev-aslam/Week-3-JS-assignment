//Accept two inputs from the user and output their sum.

const readLine = require('readline-sync');
let num1 = parseInt(readLine.question("Enter the number 1\n"));
let num2 = parseInt(readLine.question("Enter the number 2\n"));
console.log(`The sum of the two numbers are ${num1+num2}.`)