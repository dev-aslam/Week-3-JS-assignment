// Write a program to interchange the values of two arrays.
// Program should accept an array from the user, swap the values of two arrays and display it on the console

const readLine = require('readline-sync');
let num1 = [];
let num2 = [];
let limit = parseInt(readLine.question('Enter the limit of the array\n'));
console.log("Enter array 1");
for(let index =0;index<limit;index++){
    num1[index]=parseInt(readLine.question(''));
}
console.log("Enter array 2");
for(let index =0;index<limit;index++){
    num2[index]=parseInt(readLine.question(''));
}

for(let index =0;index<limit;index++){
    let temp = num1[index];
    num1[index] = num2[index];
    num2[index] = temp;
}

console.log("Array 1: ")
num1.forEach(element => {
    process.stdout.write(`${element} `);
});

console.log("\nArray 2: ")
num2.forEach(element => {
    process.stdout.write(`${element} `);
});