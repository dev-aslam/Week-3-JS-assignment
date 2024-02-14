// Write a program to identify whether a string is a palindrome or not
// A string is a palindrome if it reads the same backward or forward 
// Program should accept a string and display whether the string is a palindrome or not

const readLine = require('readline-sync');
let string = readLine.question("Enter the String\n");
string = string.toLowerCase;
let strlen = string.length;
for(let i=0;i<strlen;i++ ){
    if(string[i]!==string[strlen-i-1]){
        console.log("The entered string is not palindrome");
        return;
    }
}
console.log("The string is Palindrome");