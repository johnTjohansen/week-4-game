
$(document).ready(function() {

/* generate random number between 19 and 120 */
	var goalScore = Math.floor((Math.random() * 102) + 19);
    $('#goalNum').text(goalScore);

/* generate random number for each gem between 1 and 12 */
    var gemVal1 = Math.floor(Math.random()*11+1)
    var gemVal2 = Math.floor(Math.random()*11+1)
    var gemVal3 = Math.floor(Math.random()*11+1)
    var gemVal4 = Math.floor(Math.random()*11+1)

    var userAccum = 0;
    var totWins = 0;
    var totLoss = 0;

    $('#gamesWon').text(totWins);
    $('#gamesLost').text(totLoss);

/* reset variables for a new game */
    function newGame() {
    	goalScore = Math.floor((Math.random() * 102) + 19);
    	$('#goalNum').text(goalScore);
    	gemVal1 = Math.floor(Math.random()*11+1);
    	gemVal2 = Math.floor(Math.random()*11+1);
    	gemVal3 = Math.floor(Math.random()*11+1);
    	gemVal4 = Math.floor(Math.random()*11+1);
    	userAccum = 0;
    	$('#tallyNum').text(userAccum);
    };

	function gameWon() {
		totWins++
		$('#gamesWon').text(totWins);
		newGame();
	};
 
	function gameLost() {
		totLoss++
		$('#gamesLost').text(totLoss);
		newGame();
	};

	$('#buttOne').on('click', function() {
		userAccum = userAccum + gemVal1;
		$('#tallyNum').text(userAccum);
		if (userAccum === goalScore) {
			gameWon();
		}
		else if (userAccum > goalScore) {
			gameLost();
		}
	});

	$('#buttTwo').on('click', function() {
		userAccum = userAccum + gemVal2;
		$('#tallyNum').text(userAccum);
		if (userAccum === goalScore) {
			gameWon();
		}
		else if (userAccum > goalScore) {
			gameLost();
		}
	});

	$('#buttThree').on('click', function() {
		userAccum = userAccum + gemVal3;
		$('#tallyNum').text(userAccum);
		if (userAccum === goalScore) {
			gameWon();
		}
		else if (userAccum > goalScore) {
			gameLost();
		}
	});

	$('#buttFour').on('click', function() {
		userAccum = userAccum + gemVal4;
		$('#tallyNum').text(userAccum);
		if (userAccum === goalScore) {
			gameWon();
		}
		else if (userAccum > goalScore) {
			gameLost();
		}
	});

});