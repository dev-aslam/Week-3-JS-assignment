// Write a program to add to two dimensional arrays
// Program should accept two 2D arrays and display its sum

const readLine = require('readline-sync');
let limit = parseInt(readLine.question("Enter the size of the array\n"));
console.log("Enter the elements of matrix 1");
let matrix1=[];
let matrix2=[];

for(let i=0;i<limit;i++){
    matrix1[i]=[];
    for(let j = 0;j<limit;j++){
        matrix1[i][j] = parseInt(readLine.question(""));
    }
}

console.log("Enter the elements of matrix 2")
for(let i=0;i<limit;i++){
    matrix2[i]=[];
    for(let j = 0;j<limit;j++){
        matrix2[i][j] = parseInt(readLine.question(""));
    }
}

console.log("The sum of the two matrix are: ");
console.log("Enter the elements of matrix 2")
for(let i=0;i<limit;i++){
    for(let j = 0;j<limit;j++){
        process.stdout.write(`${matrix1[i][j]+matrix2[i][j]} `);
    }
    console.log("");
}