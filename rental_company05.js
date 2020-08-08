/*
create two arrays filled with objects: one for customers looking to rent a carChoice, and one with cars available for rent
create a function that takes one of the customers randomly and has them try to rent a random carChoice
* if they are able to afford the carChoice, output the necessary info, an updated customer array and an updated cars array
* if they are unable to afford the carChoice, output that customer x cannot afford carChoice x and should look at more afford options (output updated cars array)
^ updated the program to allow the customer to (randomly) select another vehicle repeatedly until they either purchase one or are unable to afford any
*/

let rentalCars = [{ car: `Honda`, price: 25 }, { car: `Lexus`, price: 50 }, { car: `Audi`, price: 75 }],
    customers = [{ name: `John`, cash: 85 }, { name: `Chris`, cash: 35 }, { name: `Tony`, cash: 20 }, { name: `Caitlin`, cash: 55 }];

randomRenting = (customerName, rentalCar) => {
    let carPrices = [];
    for (let a = 0; a < rentalCar.length; a++) {
        carPrices.push(rentalCar[a].price);
    }
    let cheapestPrice = Math.min(...carPrices),
        num1 = Math.floor(Math.random() * customerName.length),
        customer = customerName[num1],
        num2 = Math.floor(Math.random() * rentalCar.length),
        carChoice1 = rentalCar[num2];

    if (customer.cash >= cheapestPrice) {
        if (customer.cash >= carChoice1.price) {
            console.log(`Thank you ${customer.name} for choosing to rent our ${carChoice1.car}!\nCurrent Rentals:`);
            return [customerName.splice(num1, 1), rentalCar.splice(num2, 1)];
        } else {
            rentalCar.splice(num2, rentalCar.length);
            let num3 = Math.floor(Math.random() * rentalCar.length),
                carChoice2 = rentalCar[num3];
            console.log(`I apologize, ${customer.name}, you cannot afford the ${carChoice1.car}.\nPlease look at our more affordable options:`, rentalCar);
            if (customer.cash >= carChoice2.price) {
                console.log(`Thank you ${customer.name} for choosing to rent our ${carChoice2.car}!\nCurrent Rentals:`);
                return [customerName.splice(num1, 1), rentalCar.splice(num3, 1)];
            } else {
                rentalCar.splice(num3, rentalCar.length);
                console.log(`I apologize, ${customer.name}, you cannot afford the ${carChoice2.car}.\nPlease look at our more affordable options:`, rentalCar);
                let num4 = Math.floor(Math.random() * rentalCar.length),
                    carChoice3 = rentalCar[num4];
                if (customer.cash >= carChoice3.price) {
                    console.log(`Thank you ${customer.name} for choosing to rent our ${carChoice3.car}!\nCurrent Rentals:`);
                    return [customerName.splice(num1, 1), rentalCar.splice(num4, 1)];
                }
            }
        }
    } else return `I apologize, ${customer.name}, you cannot afford any of our rentals.\nNothing has been rented yet.`;
}

let rentals = randomRenting(customers, rentalCars);
console.log(rentals);