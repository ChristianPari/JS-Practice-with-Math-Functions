// create two arrays, one of available cars and one empty array called rented cars
// randomly select one vehicle from that array, and put it into the empty array
// of rented cars

let availableCars = [`Honda`, `Toyota`, `Mustang`];

let randomlyRented = (cars) => {
    let randomNum = Math.floor(Math.random() * cars.length); // using 'cars.length' to give the random number a range of only as many elements there are in the array
    let rentedCar = availableCars[randomNum]; // assigning 'rentedCar' a car from the array via index
    return availableCars.splice(randomNum, 1); // removing the randomNum relative index from the 'availableCars' array and then returning that value
}

let rented = randomlyRented(availableCars); // assign the function to our new 'rented' variable
console.log(rented);
console.log(availableCars);