// Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
// Program should accept an input from the user and display their grade as follows

const readLine = require('readline-sync');
let totalMarks = parseFloat(readLine.question("Enter the total marks\n"));
if(totalMarks>=90 && totalMarks <= 100)
    console.log("A grade");
else if(totalMarks>=80)
    console.log("B grade");
else if(totalMarks>=70)
    console.log("C grade");
else if(totalMarks>=60)
    console.log("D grade");
else if(totalMarks>=50)
    console.log("E grade");
else if(totalMarks<50 && totalMarks>=0)
    console.log("Failed grade");
else
    console.log("Invalid Entry")