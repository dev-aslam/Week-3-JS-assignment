// Write a program to print the following pattern using for loop
// 1
// 2	3
// 4	5	6
// 7	8	9	10

const readLine = require('readline-sync');
let row = parseInt(readLine.question("Enter the number of rows\n"));
let count=1;

for(let i=0;i<row;i++){
    for(let j=0;j<=i;j++){
        process.stdout.write(`${count} `);
        count++;
    }
    console.log();
}