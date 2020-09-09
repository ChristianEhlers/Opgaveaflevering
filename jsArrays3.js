//Write a program that rolls a die i times, and then two functions that check whether all faces were the same. whether there were any n's where n is between 1-6

function play(j){
	let dice = [0, 0, 0, 0, 0, 0];
	
	for (let i = 0; i < j; i++){
		let x = Math.random();
		x = Math.floor(x * 6 + 1);
		dice[x]++;
		console.log(dice);
	}
	return dice;
}

let x = Number(window.prompt("How many times do you want to roll the dice?"));
let arr = play(x);
if (arr.includes(x)){
	document.write("<p>All dices had the same outcome</p>");
} else {
	document.write("<p>Not all dices had the same outcome</p>");
}

let y = Number(window.prompt("Which dice number, 1-6, would you like to check for the amount of times its been hit?"));
document.write(`<p>The number ${y} has been hit ${arr[y]} times</p>`);