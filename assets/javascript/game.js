
$(document).ready(function() {
	var totalnumber = 0

	var imgValue = $('<value>')
	var randomNumbers = Math.floor(Math.random() * 9) + 1;
	
	function generateRandomValue(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	function setWinLose() {
		$('#wins').html(0)
		$('#lose').html(0)
	}
	setWinLose()
// Generates random value for each image //////////
	$('#img1').attr('value', generateRandomValue(1, 12));
	$('#img2').attr('value', generateRandomValue(1, 12));
	$('#img3').attr('value', generateRandomValue(1, 12));
	$('#img4').attr('value', generateRandomValue(1, 12));

	$('#random-number').html(generateRandomValue(19, 120))

	// When image is clicked function //////////////
	$('img').click(function() {
		var result = $('#total-number').text()
		var imageClickValue = parseInt($(this).attr('value'))
		var resultInteger = parseInt(result)
		var sum = imageClickValue + resultInteger

		$('#total-number').text(sum)
		if ($('#total-number').text() > $('#random-number').text()) {
			console.log('win')
			// $('#wins').attr('id', ++)
		} else if ($('#total-number').text() === $('#random-number').text()) {
			console.log('l')
		}
	})


})

// .data
// $("#img1").click()