// create a function called 'doCalculation', variabless a and b ae random numbers between 1 and 10

// create a number variable called 'whichCalc' which will be a random number between 0 and 3
// if 'whichCalc' == 0, log (`we will add the ${parameters} we passed in.`)
// if 'whichCalc' == 1, log (`we will subtract the ${parameters} we passed in.`)
// if 'whichCalc' == 2, log (`we will multiply the ${parameters} we passed in.`)
// if 'whichCalc' == 3, log (`we will divide the ${parameters} we passed in.`)
let num1 = Math.floor(Math.random() * 10) + 1
let num2 = Math.floor(Math.random() * 10) + 1

let doCalculation = (a, b) => {
    let whichCalc = Math.floor(Math.random() * 4).toFixed(0);
    if (whichCalc == 0) {
        console.log(`We will add ${a} and ${b}.`);
    } else if (whichCalc == 1) {
        console.log(`We will subtract ${a} and ${b}.`);
    } else if (whichCalc == 2) {
        console.log(`We will multiply ${a} and ${b}.`);
    } else {
        console.log(`We will divide ${a} and ${b}.`);
    }
}

let answer = doCalculation(num1, num2);