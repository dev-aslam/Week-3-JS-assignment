// Given a variable named my_height, you must throw errors under the following conditions:
// notANumberError- When my_heightis NaN
// HugeHeightError – When my_heightis greater than 75
// TinyHeight Error - When my_heightis less than 0

const readLine = require('readline-sync');

my_height = parseInt(readLine.question("Enter the height "));

class notANumberError extends Error{
    constructor(){
        super("The input is not a number");
        this.name = "notANumberError";
    }
}

class hugeHeightError extends Error{
    constructor(){
        super("The height exceeded 75");
        this.name = "hugeHeightError";
    }
}

class tinyHeightError extends Error{
    constructor(){
        super("The height is 0 or below");
        this.name = "tinyHeightError";
    }
}

try{
    if(isNaN(my_height))
        throw new notANumberError();
    if(my_height >= 75)
        throw new hugeHeightError();
    if(my_height<=0)
        throw new tinyHeightError();
    console.log(my_height);
}catch(e){
    console.error(`${e.name}: ${e.message}`);
}