//your JS code here. If required.
let timeDisplay = document.getElementById("timer");
let currentDate = new Date();

setInterval(
	function(){
		currentDate = new Date();

		timeDisplay.innerHTML = currentDate.toLocaleString();
	},1000
)
