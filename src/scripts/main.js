// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
//let potteryMade = makePottery('tall', 20, 30);
//console.log(potteryMade);

// Make 5 pieces of pottery at the wheel
const potOne =  makePottery('tall', 20, 30);
const potTwo =  makePottery('short', 15, 80);
const potThree = makePottery('circle', 2, 20);
const potFour = makePottery('thin', 5, 30);
const potFive = makePottery('square', 10, 90);
console.log(potOne);
console.log(potTwo);
console.log(potThree);
console.log(potFour);
console.log(potFive);



// Fire each piece of pottery in the kiln
let fireOne = firePottery(potOne, 2000)
let fireTwo = firePottery(potTwo, 2300)
let fireThree = firePottery(potThree, 1000)
let fireFour = firePottery(potFour, 2200)
let fireFive = firePottery(potFive, 1900)
console.log(fireOne)
console.log(fireTwo)
console.log(fireThree)
console.log(fireFour)
console.log(fireFive)


// Determine which ones should be sold, and their price
toSellOrNotToSell(fireOne)
toSellOrNotToSell(fireTwo) 
toSellOrNotToSell(fireThree) 
toSellOrNotToSell(fireFour) 
toSellOrNotToSell(fireFive) 


// Invoke the component function that renders the HTML list



