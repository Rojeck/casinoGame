let totalPrice = 0;
const defaultNumberOfRangeMax = 8;
const defaultPriceMax = 100;
const priceSeparator = 2;
const rangeGrow = 4;

function gameStart (message, numberOfRangeMax = defaultNumberOfRangeMax, priceMax = defaultPriceMax) {
    const answer = confirm(message);
    if (answer) {
        gameRound(numberOfRangeMax, priceMax);
    } else {
        if (totalPrice!==0) {
            const playAgain = confirm(`Thank you for your participation. Your 
            prize is: ${totalPrice} $. Do you want to play again?`) 
            if (playAgain){
                totalPrice = 0;
                gameStart();
            } else {
                alert('You did not become a billionaire, but can');
            }
        } else {
            alert('You did not become a billionaire, but can');
        }
    }
}
function gameRound (numberOfRangeMax, priceMax) {
    const numberOfRangeMin = 0;
    const randomNumber = Math.floor(Math.random() * (numberOfRangeMax - numberOfRangeMin + 1)) + numberOfRangeMin;
    let currentPrice = priceMax;
    let victoryTarget = false;
    for (let i = 3; i > 0; i--) {
    const userNumber = + prompt(`
    Choose a roulette pocket number from ${numberOfRangeMin} to ${numberOfRangeMax}\n
    Attempts left: ${i}\n
    Total prize: ${totalPrice}\n
    Possible prize on current attempt: ${currentPrice}`);
    if (userNumber === randomNumber) {
        victoryTarget = true;
        break; 
         } else {
            currentPrice /= priceSeparator;
        }
    }
    if (victoryTarget) {
        totalPrice += currentPrice;
        gameStart(`Congratulation, you won! Your prize is: ${totalPrice} $. Do you want 
        to continue?`, numberOfRangeMax + rangeGrow, priceMax * priceSeparator);
    } else {
        let tmpPrice = totalPrice;
        totalPrice = 0;
        gameStart(`Thank you for your participation. Your 
        prize is: ${tmpPrice} $. Do you want 
        play again?`); 
    }
}
gameStart('Do you want to play a game?');
