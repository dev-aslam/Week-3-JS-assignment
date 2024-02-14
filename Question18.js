// Write a program to find the grade of a student during his academic year. 
// Program should accept the scores for written test, lab exams and assignments
// Output the grade of a student (using weighted average)

const readLine = require('readline-sync');
let written_exam, lab_exam, assignments, grade;
console.log("Enter the marks scored by the students");

written_exam = parseInt(readLine.question("Written Exam = "));
lab_exam = parseInt(readLine.question("Lab Exam = "));
assignments = parseInt(readLine.question("Assignments  = "));

grade = (written_exam*70)/100 + (lab_exam*20)/100 + (assignments*10)/100;

console.log(`Grade of the student is ${grade}`);