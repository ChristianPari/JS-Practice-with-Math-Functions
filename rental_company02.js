/*
create two arrays filled with objects: one for customers looking to rent a carChoice, and one with cars available for rent
create a function that takes one of the customers randomly and has them try to rent a random carChoice
* if they are able to afford the carChoice, output the necessary info, an updated customer array and an updated cars array
* if they are unable to afford the carChoice, output that customer x cannot afford carChoice x and should look at more afford options (output updated cars array)
^ updated the program to allow the customer to (randomly) select another vehicle repeatedly until they either purchase one or are unable to afford any
*/

let rentalCars = [{ car: `Honda`, price: 25 }, { car: `Lexus`, price: 50 }, { car: `Audi`, price: 75 }]
let customers = [{ name: `John`, cash: 85 }, { name: `Chris`, cash: 35 }, { name: `Tony`, cash: 20 }, { name: `Caitlin`, cash: 55 }]
let rentals;


let randomRenting = (customerName, rentalCar) => {
    let num1 = Math.floor(Math.random() * customerName.length);
    let customer = customerName[num1];
    let num2 = Math.floor(Math.random() * rentalCar.length);
    let carChoice = rentalCar[num2];
    if (customer.cash >= carChoice.price) {
        console.log(`Thank you ${customer.name} for choosing to rent our ${carChoice.car}!`);
        console.log(`Current Rentals:`);
        return [customerName.splice(num1, 1), rentalCar.splice(num2, 1)];
    } else {
        if (customer.cash >= rentalCar[0].price) {
            console.log(`I apologize, ${customer.name}, you cannot afford the ${carChoice.car}.`)
            rentalCar.splice(num2, rentalCar.length);
            console.log(`Please look at our more affordable options:`, rentalCar);
            let num3 = Math.floor(Math.random() * rentalCar.length);
            let carChoice2 = rentalCar[num3];
            if (customer.cash >= carChoice2.price) {
                console.log(`Thank you ${customer.name} for choosing to rent our ${carChoice2.car}!`);
                console.log(`Current Rentals:`);
                return [customerName.splice(num1, 1), rentalCar.splice(num3, 1)];
            } else {
                console.log(`I apologize, ${customer.name}, you cannot afford the ${carChoice2.car}.`)
                rentalCar.splice(num3, rentalCar.length);
                console.log(`Please look at our more affordable options:`, rentalCar);
                let num4 = Math.floor(Math.random() * rentalCar.length);
                let carChoice3 = rentalCar[num4];
                if (customer.cash >= carChoice3.price) {
                    console.log(`Thank you ${customer.name} for choosing to rent our ${carChoice3.car}!`);
                    console.log(`Current Rentals:`);
                    return [customerName.splice(num1, 1), rentalCar.splice(num4, 1)];
                }
            }
        } else {
            console.log(`I apologize, ${customer.name}, you cannot afford any of our rentals.`);
            return `Nothing has been rented yet.`;
        }
    }
}

rentals = randomRenting(customers, rentalCars);
console.log(rentals);