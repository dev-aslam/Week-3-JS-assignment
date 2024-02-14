//Accept a char input from the user and display it on the console.

const readLine = require('readline-sync');
let char = readLine.question('Enter a character\n');
console.log(`The entered character is '${char}'`);