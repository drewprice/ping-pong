function pingPongify (num) {
	var pingy = (num % 3 == 0);
	var pongy = (num % 5 == 0);
	var result = '';
	
	if (pingy) { result += 'Ping' };
	if (pongy) { result += 'Pong' };
	if (!pingy && !pongy) { result = num };

	return result
}

function printLine (string) {
	$("<li>" + string + "</li><li class='line'></li>")
		.appendTo(".output");
}

function pingPong (limit) {
	for (var i = 1; i <= limit; i++) {
		printLine( pingPongify(i) )
	};
}

function newOutput () {
	$(".output").empty();

	input = $(".input").text();
	
	if ( $.isNumeric(input) ) {
		pingPong(input)
	} else {
		printLine("That is not a valid number!")
	};
}

function readyForSubmission () {
	$(".submit").click( function() {
		newOutput()
	})

	$(document).keypress( function (event) {
		if (event.which == 13) {
			event.preventDefault();
			$(".submit").click();
		};
	})

}

$(document).ready( function() {
	$(".input").focus();
	readyForSubmission();
})