// Write a program to sort an array in descending order
// Program should accept and array, sort the array values in descending order and display it

const readLine = require('readline-sync');
let arr = [];
let limit = parseInt(readLine.question("Enter the limit of the array\n"));
console.log("Enter the array values: ");
for(let i=0;i<limit;i++){
    arr[i]=parseInt(readLine.question(''));
}

for(let i=0;i<limit;i++){
    for(let j=0;j<limit-i;j++){
        if(arr[j]<arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log("The sorted array is :")
arr.forEach(element =>{
    process.stdout.write(`${element} `);
});