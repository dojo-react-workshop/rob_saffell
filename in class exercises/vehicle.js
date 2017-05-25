'use strict'

function Vehicle(name, numOfWheels, numOfPassengers, speed){
    
    //Create the object
    const vehicle = {
        name : name,
        numOfWheels: numOfWheels,
        numOfPassengers: numOfPassengers,
        speed: speed,
        makeNoise: function(){
            if (this.name === "sedan") {
                return "beep  beep";
            } else if (name === "bus") {
                return "Honk honk";
            } else  if (this.name === 'bike') {
                return "ring ring";
            } else {return "dakka dakka"}
        },
        accelerate: function(velChg = 1) {
            this.speed += velChg;
            return this.speed;
        }
    };


    //Return the object - these are the minimums of a COnstructor
    return vehicle;
}

const v1 = Vehicle('sedan', 4,"",90);