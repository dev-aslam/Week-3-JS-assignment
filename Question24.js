// Write a menu driven program to calculate the area of a given object.
// Program should contain two classes
// Class 1: MyClass
// Class 2: Area

const readLine = require('readline-sync');

class Area{
    circle(radius){
        return Math.PI*radius*radius;
    }
    square(side){
        return side*side;
    }
    rectangle(length,breadth){
        return length*breadth;
    }
    triangle(base,height){
        return 0.5*base*height;
    }
}

class MyClass extends Area{
    main(){
        console.log("Enter your choice:");
        console.log("1. Calculate the Area of Cirle");
        console.log("2. Calculate the Area of Square:");
        console.log("3. Calculate the Area of Rectangle");
        console.log("4. Calculate the Area of Triangle");
        let ch = parseInt(readLine.question(""));

        switch(ch){
            case 1:
                let radius = parseInt(readLine.question("Enter the radius the circle: "));
                console.log(`Area of the circle is ${this.circle(radius)}`);
                break;
            case 2:
                let side = parseInt(readLine.question("Enter the side of square: "));
                console.log(`Area of the square is ${this.square(side)}`);
                break;
            case 3:
                let length = parseInt(readLine.question("Enter the length of the rectangle: "));
                let breadth = parseInt(readLine.question("Enter the breadth of the rectangle: "));
                console.log(`Area of the rectangle is ${this.rectangle(length,breadth)}`);
                break;
            case 4:
                let base = parseInt(readLine.question("Enter the base of the triangle: "));
                let height = parseInt(readLine.question("Enter the height of the triangle: "));
                console.log(`Area of the trianle is ${this.triangle(base,height)}`);
                break;
            default:
                console.log("Invalid Choice");
        }
    }
}

function main(){
    const obj = new MyClass();
    obj.main();
}

main();