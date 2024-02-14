// Write a program to print the multiplication table of given numbers.
// Accept an input from the user and display its multiplication table

const readLine = require('readline-sync');
let num = parseInt(readLine.question('Enter a number\n'));

for (let index = 1; index <=10; index++) {
    console.log(`${index} x ${num} = ${index*num}`);
    
}