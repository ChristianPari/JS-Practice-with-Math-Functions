// create two arrays, one of available cars and one empty array called rented cars
// randomly select one vehicle from that array, and put it into the empty array
// of rented cars
//^ now implement a car's price, your available cash, and make the 'availableCars' array into 
//^ output should say "thanks for renting" and then log the rented car and the updated available cars array IF you can afford it
//^ IF unable to afford the car, output can't afford it and suggest looking at more affordable options

let availableCars = [{ car: `Honda`, price: 50 }, { car: `Toyota`, price: 25 }, { car: `Mustang`, price: 75 }];
let cash = 55;
let rented = [];

let randomlyRented = (cars) => {
    let randomNum = Math.floor(Math.random() * cars.length); // using 'cars.length' to give the random number a range of only as many elements there are in the array
    let rentedCar = availableCars[randomNum]; // assigning 'rentedCar' a car from the array via index
    if (cash >= cars[randomNum].price) {
        console.log(`Thank you for renting the ${cars[randomNum].car}!`);
        availableCars.splice(randomNum, 1); // removing the randomNum relative index from the 'availableCars' array
        rented.push(rentedCar); // pushing the 'rentedCar' data into the empty 'rented' array
        console.log(`Rented cars:`, rented);
        console.log(`Cars still available:`, availableCars);
    } else {
        console.log(`I'm sorry but you cannot afford the ${cars[randomNum].car}. `);
        availableCars.splice(randomNum, 1);
        console.log(`Please take a look at our more affordable rentals:`, availableCars);
    }
}

randomlyRented(availableCars);