//Write a program to check whether a student has passed or failed in a subject after he or she enters their mark (pass mark for a subject is 50 out of 100).
// Program should accept an input from the user and output a message as “Passed” or “Failed”

const readLine = require('readline-sync');
let mark = readLine.question("Enter the mark\n");
if(mark>=50)
    console.log("Passed");
else
    console.log("Failed");