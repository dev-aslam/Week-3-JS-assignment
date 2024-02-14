// Write a program to add the values of two 2D arrays
// Program should contains 3 functions including the main function
// main()
// Call function getArray()
// Call function addArray()
// Call function displayArray()


const readLine = require('readline-sync');

function getArray(limit){
    let arr = [];
    for(let i=0;i<limit;i++){
        arr[i] = [];
        for(let j=0;j<limit;j++){
            arr[i][j]=parseInt(readLine.question(''));
        }
    }
    return arr;
}

function addArray(arr1,arr2,limit){
    let arr = [];
    for(let i=0;i<limit;i++){
        arr[i] = [];
        for(let j=0;j<limit;j++){
            arr[i][j]=arr1[i][j]+arr2[i][j];
        }
    }
    return arr;
}

function displayArray(arr){
    console.log('Output: ');
    console.log('Sum of array 1 and array 2: ');
    arr.forEach(element => {
        element.forEach(ele=>{
            process.stdout.write(`${ele} `);
        });
        console.log();
    });
}

function main(){
    let arr1,arr2,res;
    let limit = parseInt(readLine.question("Enter the limit of the array\n"));
    console.log("Enter the values of the array 1");
    arr1 = getArray(limit);
    console.log("Enter the values of the array 2");
    arr2 = getArray(limit);
    res = addArray(arr1, arr2, limit);
    displayArray(res);
}

main();