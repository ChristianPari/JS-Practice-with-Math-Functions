// create an object called person
// has a name, age, and cash property
//* next, make the person's age random between 15 and 75. If the person is less than 21 years old, say he is not old enough to buy the drink, you are only x years old.
//* otherwise, log the person and his change and then thank you for your purchase

let person = {
    name: `Blob`,
    age: Math.floor(Math.random() * 75) + 15, //* + 15 is the minimum number
    // what if his cash was random each time?
    //^ make the cash variable produce random numbers
    cash: Math.floor(Math.random() * 20) //* Math.floor() used to round off a number
        //* Math.random() produces a random number between 0-1 but by adding '* x' to the end of it, it gives the Math.random() a greater range of numbers not including 'x',
        //* to randomly output
};

let item = {
    name: `Drink`,
    price: 15.99
};

function buyDrink(customer, product) {
    if (customer.age >= 21) {
        if (customer.cash >= product.price) {
            let change = (customer.cash - product.price);
            console.log(`${customer.name} you're able to drink, and your change is $${change.toFixed(2)}. Thank you for your purchase!`);
        } else {
            console.log(`Sorry ${customer.name} but you can't afford a drink.`);
        }
    } else {
        console.log(`Sorry ${customer.name} but you're only ${customer.age}, you aren't old enough to drink!`);
    }
}

buyDrink(person, item);