// Write a myFilter function that takes 2 parameters: myArray and callback. Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as its parameter and returns a boolean true if the sum of the number is even or   false if the sum of the number  is odd.

const readLine = require('readline-sync');

function myFilter(myArray,callback){
    let result=0;
    myArray.forEach(element => {
        result+= element;
        callback(element)?console.log(`sum of digits of ${element} is even`):console.log(`sum of digits of ${element} is odd`);
    });
    console.log(result);
    
}

function callback(num){
    let sum = 0;
    while(num!=0){
        sum = sum + num%10;
        num = parseInt(num/10);
    }
    return sum%2===0;
}

function main(){
    let arr = [];
    let limit = parseInt(readLine.question("Enter the limit of the array\n"));
    console.log("Enter the array values:");
    for(let i=0;i<limit;i++){
        arr[i] = parseInt(readLine.question(""));
    }
    myFilter(arr,callback);
}

main();