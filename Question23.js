// Write an object oriented program to store and display the values of a 2D array
// Program should contains 3 functions including the main function
// main()
// Declare an array
// Call function getArray()
// Call function displayArray()

const readLine = require('readline-sync');

class arrayFunction{
    constructor(arr){
        this.matrix = arr;
    }

    getArray(){
        let limit = parseInt(readLine.question("Enter the limit of the matrix\n"));
        console.log("Enter the values of the array");
        for(let i=0;i<limit;i++){
            this.matrix[i] = [];
            for(let j=0;j<limit;j++){
                this.matrix[i][j]=parseInt(readLine.question(''));
            }
        }
    }

    displayArray(){
        console.log('Output: ');
        this.matrix.forEach(element => {
            element.forEach(ele=>{
                process.stdout.write(`${ele} `);
            });
            console.log();
        });
    }
}

function main(){
    let arr = []
    const obj = new arrayFunction(arr);
    obj.getArray();
    obj.displayArray();
}

main();