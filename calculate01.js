// create a function called 'doCalculation', variabless a and b ae random numbers between 1 and 10

// create a number variable called 'whichCalc' which will be a random number between 0 and 3
// if 'whichCalc' == 0, log (`we will add the ${parameters} we passed in.`)
// if 'whichCalc' == 1, log (`we will subtract the ${parameters} we passed in.`)
// if 'whichCalc' == 2, log (`we will multiply the ${parameters} we passed in.`)
// if 'whichCalc' == 3, log (`we will divide the ${parameters} we passed in.`)
//^ return answer
//! Math.floor() will completely round off a number

let num1 = Math.floor(Math.random() * 10) + 1
let num2 = Math.floor(Math.random() * 10) + 1

let doCalculation = (a, b) => {
    let whichCalc = Math.floor(Math.random() * 4)
    if (whichCalc == 0) {
        console.log(`We will add ${a} and ${b}.`);
        return a + b;
    } else if (whichCalc == 1) {
        console.log(`We will subtract ${a} and ${b}.`);
        return a - b;
    } else if (whichCalc == 2) {
        console.log(`We will multiply ${a} and ${b}.`);
        return a * b;
    } else {
        console.log(`We will divide ${a} and ${b}.`);
        return a / b;
    }
}

let answer = doCalculation(num1, num2);
console.log(answer);