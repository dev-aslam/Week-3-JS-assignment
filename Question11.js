// Write a program to find the number of even numbers in an array
// Program should accept an array and display the number of even numbers contained in that array

const readLine = require('readline-sync');
let arr = [];
let limit = parseInt(readLine.question("Enter the limit of the array\n"));
console.log("Enter the array values: ");
for(let i=0;i<limit;i++){
    arr[i]=parseInt(readLine.question(''));
}
let count = 0;
arr.forEach(element => {
    if(element%2===0)
        count++;
});

console.log(`Number of even numbers in the given array is ${count}`);