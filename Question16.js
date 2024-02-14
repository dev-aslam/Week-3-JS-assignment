// Write a program to check whether a given number is prime or not
// Program should accept an input from the user and display whether the number is prime or not

const readLine = require('readline-sync');

let num = parseInt(readLine.question("Enter a number\n"));

if(num<2){
    console.log("The given number is not prime");
    return;
}    

for(let i=2;i<=num/2;i++){
    if(num%i===0){
        console.log("The given number is not prime");
        return;
    }
}
console.log("The given number is prime");