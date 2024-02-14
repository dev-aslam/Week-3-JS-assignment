// Create a constructor function that satisfies the following conditions:
// The name of the constructor function should be Car.
// It should take three parameters: name, mileage and max_speed.
// Store these parameter values in their respective thiskeywords

class car{
    constructor(name, mileage,max_speed){
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
        this.displayData();
    }

    displayData(){
        console.log(`The name is : ${this.name} \nMileage: ${this.mileage}\nMax speed: ${this.max_speed}`);
    }
}

function main(){
    const obj = new car("Toyota",20,200)
}

main();