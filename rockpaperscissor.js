
/*
************* THE ROCK, PAPER AND SCISSOR GAME ************* 
*/

// Generates the computer hand
function computerPlay() {
	let hand = ["Rock", "Paper", "Scissor"];
	let choice = hand[Math.floor(Math.random()*hand.length)];
	return choice;
}

// Makes the player choose his hand
function playerSelection() {
	let hand = prompt("Please choose Rock, Paper or Scissor");
	hand.toLowerCase();
	return hand.charAt(0).toUpperCase() + hand.slice(1);
}

// Compare hand againts the computer and returns if you won or lost
function playRound( playerSelection, computerPlay ) {
	let win = "You da man!";
	let loose = "Congradulation, you played yourself!";
	let tie = "Boring, it's a tie";

	if (playerSelection == computerPlay) {
		return tie;
	}

	if (playerSelection == "Rock" && computerPlay == "Scissor" ){
		return win;
	}	

	else{
		return loose;
	}

	if (playerSelection == "Paper" && computerPlay == "Rock"){
		return win;
	}

	else{
		return loose;
	}
			
	if (playerSelection == "Scissor" && computerPlay == "Paper"){
		return win;
	}

	else{
		return loose;
	}

}


function game() {
	let pwins = 0;
	let cwins = 0;
	let draw = 0;
	
	// loop of 5 rounds
	for (var i = 0; i < 5; i++) {
		let player = playerSelection();
		let computer = computerPlay();
		let round = playRound(player, computer);
		console.log(computer);

		// if statment is relations to the result of playRound() function
		if (round == "Boring, it's a tie"){
			draw++;
		} else if (round == "You da man!"){
			pwins++;
		} else {
			cwins++;
		}
	}

	// possible results
	if (pwins == 0){
		return "DANM YOU DIDN'T WIN 1 ROUND";
	}

	if (pwins == 5){
		return " WOW YOU WON IT ALL. FLAWLESS VICTORY";
	}

	if (pwins == cwins){
		return "Seems like you need to go again and maybe try this time to win!";
	}

	if (pwins > cwins){
		return "You da MAYNE!!! with " + pwins + " to " + cwins + " wins.";
	}

	else{
		return "Congradulation, you PLAYED yourself!!! with " + cwins + " to " + pwins + " losses.";
	}
}

const player = playerSelection()
const computer = computerPlay()
