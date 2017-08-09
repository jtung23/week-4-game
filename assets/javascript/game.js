
$(document).ready(function() {
	
	var totalnumber = 0
	var randomNumbers = Math.floor(Math.random() * 9) + 1;
	var win = $('#wins').html()
	var lose = $('#lose').html()
	
	function generateRandomValue(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	function setWinLose() {
		$('#wins').html(0)
		$('#lose').html(0)
	}

	function resetAfterWinLose() {
		$('#total-number').html(totalnumber)
	}

	function generateAllRandomValues() {
		$('#img1').attr('value', generateRandomValue(1, 12));
		$('#img2').attr('value', generateRandomValue(1, 12));
		$('#img3').attr('value', generateRandomValue(1, 12));
		$('#img4').attr('value', generateRandomValue(1, 12));

		$('#random-number').html(generateRandomValue(19, 120));
	}
	
	setWinLose();

	resetAfterWinLose();
	generateAllRandomValues();
// Generates random value for each image //////////

	// put values into array to not repeat.

	// When image is clicked function //////////////
	$('img').click(function() {
		var result = $('#total-number').text();
		var imageClickValue = parseInt($(this).attr('value'));
		var resultInteger = parseInt(result);
		var sum = imageClickValue + resultInteger;
		$('#total-number').text(sum)

		var totalAsInt = parseInt($('#total-number').text())
		var randomAsInt = parseInt($('#random-number').text())

		if (totalAsInt > randomAsInt) {
				console.log('lose');
				$('#lose').html(parseInt($('#lose').html()) + 1);
				resetAfterWinLose();
				generateAllRandomValues();
			}
		else if (totalAsInt === randomAsInt) {
			console.log('win');
			$('#wins').html(parseInt($('#wins').html()) + 1);
			resetAfterWinLose();
			generateAllRandomValues();
		}
	})


})

// .data
// $("#img1").click()