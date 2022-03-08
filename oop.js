/* Object Literals, Pseudo-Classes and Methods */

let person1 = {
  name: "Fred",

  sayHello: function () {
    console.log(`Hello! my name is ${this.name}`);
  },
};
let person2 = {
  name: "Brandon",

  sayHello: function () {
    console.log(`Hello! my name is ${this.name}`);
  },
};
let person3 = {
  name: "Trayvon",

  sayHello: function () {
    console.log(`Hello! my name is ${this.name}`);
  },
};
let person4 = {
  name: "Binky",

  sayHello: function () {
    console.log(`Hello! my name is ${this.name}`);
  },
};
let person5 = {
  name: "Berry",

  sayHello: function () {
    console.log(`Hello! my name is ${this.name}`);
  },
};
//Calls
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

/*Constructor Function--The Old Way--The long hand way */
function Person(name, city, age) {
  this.name = name;
  this.city = city;
  this.age = age;
}
//prototype method function
Person.prototype.sayHello = function () {
  console.log(
    `Hey! My name is ${this.name}, I am ${this.age}, and I live in ${this.city}.`
  );
};

let PersonA = new Person("Nara", "Seattle", 49); //Object Blueprint--instantiation
PersonA.sayHello(); //call

/*Constructor Function ES2015 */
class PersonZ {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }
  //prototype method function
  sayHello() {
    console.log(
      `Hey! My name is ${this.name}, I am ${this.age}, and I live in ${this.city}.`
    );
  }
}
let PersonX = new PersonZ("Sara", "New Township", 69); //Object Blueprint--instantiation
PersonX.sayHello(); //call

class Vehicle {
  constructor(manufacturer, numberOfWheels) {
    this.manufacturer = manufacturer;
    this.numberOfWheels = numberOfWheels;
  }
  aboutVehicle() {
    console.log(
      `The manufacture is ${this.manufacturer}, and it has ${this.numberOfWheels} wheels.`
    );
  }
}
const vehicleA = new Vehicle("Honda", 4);
vehicleA.aboutVehicle();

class Truck extends Vehicle {
  constructor(manufacturer, numberOfWheels, numberOfDoors, hasTruckbed) {
    super(manufacturer, numberOfWheels);
    this.numberOfDoors = numberOfDoors;
    this.hasTruckbed = hasTruckbed;
  }
  aboutVehicle() {
    console.log(
      `The manufacture is ${this.manufacturer}, and it has ${this.numberOfWheels} wheels, ${this.numberOfDoors} doors, and a truckbed.`
    );
  }
}
const truck = new Truck("Ford", 4, 4, true);
truck.aboutVehicle();

class Sedan extends Vehicle {
    constructor(manufacturer, numberOfWheels, size, mpg) {
      super(manufacturer, numberOfWheels);
      this.size = size;
      this.mpg = mpg;
    }
    aboutVehicle() {
      console.log(
        `The manufacture is ${this.manufacturer}, and it has ${this.numberOfWheels} wheels; it is ${this.size} and has ${this.mpg} mileage.`
      );
    }
  }
  const sedan = new Sedan("Kia", 4, "medium", 35);
  sedan.aboutVehicle();

  class Motorcycle extends Vehicle {
    constructor(manufacturer, numberOfWheels,hasHandleBars, mpg ) {
      super(manufacturer, numberOfWheels);
      this.hasHandleBars = hasHandleBars;
      this.mpg = mpg;
    }
    aboutVehicle() {
      console.log(
        `The manufacture is ${this.manufacturer}, and it has ${this.numberOfWheels} wheels; it has handle bars and has ${this.mpg} miles per gallon.`
      );
    }
  }
  const motorcycle = new Motorcycle("Yamaha", 2, true, 45);
  motorcycle.aboutVehicle();