// Write a program to accept an array and display it on the console using functions
// Program should contain 3 functions including main() function

const readLine = require('readline-sync');

const main = () =>{
    let arr = [];
    arr = getArray(arr);
    displayArray(arr);
}

const getArray = (arr) => {
    let limit = parseInt(readLine.question('Enter the array limit\n'));
    console.log("Enter the array elements");
    for(let i=0;i<limit;i++){
        arr[i]=parseInt(readLine.question(""));
    }
    return arr;
}

const displayArray = (arr) =>{
    console.log("The elements of the array are: ")
    arr.forEach(element => {
        process.stdout.write(`${element} `)
    });
}

main();