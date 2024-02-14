// Write a program to find out the income tax amount of a person.
// Program should accept annual income of a person
// Output the amount of tax he has to pay

const readLine = require('readline-sync');

let income = parseInt(readLine.question("Enter the annual income\n"));
let tax;
if(income<=250000){
    console.log("No tax to be paid");
    return;
}
else if(income>250000 && income<=500000)
    tax = income*5/100;
else if(income>500000 && income<=1000000)
    tax = income*20/100;
else if(income>1000000 && income<=5000000)
    tax = income*30/100;

console.log(`The income tax to be paid is ${tax}`);