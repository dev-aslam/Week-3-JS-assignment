// Write a program to print the following pattern (hint: use nested loop)

const readLine = require('readline-sync');
let num = parseInt(readLine.question('Enter the number of rows\n'));

for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(`${j} `);
    }
    console.log("");
}