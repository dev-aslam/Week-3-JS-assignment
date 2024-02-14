// Write a program to multiply the adjacent values of an array and store it in an another array
// Program should accept an array
// Multiply the adjacent values
// Store the result into another array
const readLine = require('readline-sync');
let arr =[];
let result =[];
let limit = parseInt(readLine.question("Enter the limit of the array\n"));
console.log("Enter the values of the array");
for(let i=0;i<limit;i++){
    arr[i]=parseInt(readLine.question(''));
}

for(let i=0;i<limit-1;i++){
    result[i] = arr[i]*arr[i+1];
}

console.log("Output");

result.forEach(element=>{
    process.stdout.write(`${element} `)
});