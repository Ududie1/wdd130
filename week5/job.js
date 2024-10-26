const myObj = {name: "Dave"};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat","Sleep","Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "iced Tea"

    },
    action:function() {
      return 'Time for ${this.beverage.morning}';  
    }
}
console.log(anotherObj.hobbies[2]);




const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrooooo";
    }
}

const truck = Object.create(vehicle);
truck.doors = 5;
console.log(truck.doors);
console.log(truck.wheels);
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return "Whooooooosh";
};
console.log(car.engine());
console.log(car.wheels);
console.log(vehicle.engine());
const tesla = Object.create(car);
console.log(tesla.wheels)
console.log(tesla.engine());
tesla.engine = function () {
    return "whheeeee";
};
console.log(tesla.engine());

const band = {
    vocals: "Robert plant",
    guitar: "jimmy rose",
    Bass: "john paul whose",
    drums: "lace grace",
};


function sings({Bass}) { return `${Bass} Sings!`};
console.log(sings(band));


//console.log(Object.keys(band));
//console.log(Object.values(band));
