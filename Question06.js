//Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 

const readLine = require('readline-sync');
let num = parseInt(readLine.question('Enter a number from 1 to 7\n'));
switch(num){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Entry");
}