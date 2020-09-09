//In the assignments Conds.0, and Funcs.2, you were flipping a coin of rolling a die. In both cases you used counter variables to tally the number of the various outcomes. Now you must change that to using an array instead of individual variables. Write a comment or two about it in the code.
//Coinflip
let coin = [1, 2];
function play() {
    let coin = Math.random();
    coin = Math.floor(coin * 2 + 1);
    return coin;
}
console.log(play());

//Dice
let dice = [1, 2, 3, 4, 5, 6];
function playy() {
    let dice = Math.random();
    dice = Math.floor(dice * 6 + 1);
    return dice;
}
console.log(playy());

//Ændringen i koden er, at et array er defineret før funktionen, og dets navn har erstattet x'et fra funktionen i de tidligere opgaver. 