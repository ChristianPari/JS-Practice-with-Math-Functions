/*
create two arrays filled with objects: one for customers looking to rent a car, and one with cars available for rent
create a function that takes one of the customers randomly and has them try to rent a random car
* if they are able to afford the car, output the necessary info, an updated customer array and an updated cars array
* if they are unable to afford the car, output that customer x cannot afford car x and should look at more afford options (output updated cars array)
*/

let rentalCars = [{ car: `Honda`, price: 25 }, { car: `Lexus`, price: 50 }, { car: `Audi`, price: 75 }]
let customers = [{ name: `John`, cash: 85 }, { name: `Chris`, price: 35 }, { name: `Tony`, cash: 20 }, { name: `Caitlin`, cash: 55 }]
let satisfiedCust = [];
let rentedCars = [];

let randomRenting = (customerName, rentalCar) => {
    let randomNum1 = Math.floor(Math.random() * customerName.length);
    let customer = customerName[randomNum1];
    let randomNum2 = Math.floor(Math.random() * rentalCar.length);
    let car = rentalCar[randomNum2];
    if (customer.cash >= car.price) {
        customerName.splice(randomNum1, 1);
        satisfiedCust.push(customer);
        rentalCar.splice(randomNum2, 1);
        rentedCars.push(car);
        console.log(`Satisfied customer(s): ${satisfiedCust[0].name}.\n`, satisfiedCust);
        console.log(`Rented cars: ${rentedCars[0].car}.\n`, rentedCars);
    } else {
        console.log(`I apologize but ${customer.name}, you cannot afford the ${car.car}.`)
        rentalCar.splice(randomNum2, 1);
        console.log(`Please look at our more affordable options:`, rentalCar);
    }
}

randomRenting(customers, rentalCars);