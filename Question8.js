// Write a program to find the sum of all the odd numbers for a given limit
// Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit

const readLine = require('readline-sync');
let num = parseInt(readLine.question('Enter a limit\n'));
let sum=0;
for(let index=1;index<=num;index++){
    if(index%2!=0){
        sum+=index;
    }
}
console.log(`The sum of the odd numbers is ${sum}`);