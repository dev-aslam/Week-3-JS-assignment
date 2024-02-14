// Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console.

const readLine = require('readline-sync');

let my_string = readLine.question("Enter a string ");
// let my_string = Number(readLine.question("Enter a string "));

try{
    my_string = my_string.split('').reverse().join('');
    console.log(`Reversed string is ${my_string}`);
}catch(err){
    console.log(err.message);
}finally{
    console.log(`Type of the my_string is ${typeof(my_string)}`)
}