// Write a menu driven program to do the basic mathematical operations such as    addition, subtraction, multiplication and division (hint: use if else ladder or switch)
// Program should have 4 functions named addition(), subtraction(), multiplication() and division()
// Should create a class object and call the appropriate function as user prefers in the main function

const readLine = require('readline-sync');

class calc{
    getNum() {
        return parseInt(readLine.question(""));
    }
    addNum(a,b){return a+b;}
    subNum(a,b){return a-b;}
    mulNum(a,b){return a*b;}
    divNum(a,b){
        if(b===0){
            console.log("Division by 0 is not possible");
            return NaN;
        }
        return a/b;
    }
}

function main(){
    const obj = new calc();

    let num1,num2,ch,result;
    console.log("Enter your choice: \n1. Addition \n2. Subtraction \n3. Multiplication\n4. Division ");
    ch = parseInt(readLine.question(""));

    console.log("Enter the number 1 : ");
    num1=obj.getNum();
    console.log("Enter the number 2 : ");
    num2=obj.getNum();

    switch(ch){
        case 1:
            result = obj.addNum(num1,num2);
            break;
        case 2:
            result = obj.subNum(num1,num2);
            break;
        case 3:
            result = obj.mulNum(num1,num2);
            break;
        case 4:
            result = obj.divNum(num1,num2);
            break;
        default:
            console.log("Enter a valid number");
    }

    console.log(`The result is ${result}`);
}

main();