// Set the date we're counting down to
var newRoundDate = new Date("May 17, 2019 15:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var timeLeft = newRoundDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  if (days < 10) {days = "0" + days;}
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  if (hours < 10) {hours = "0" + hours;}
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  if (minutes < 10) {minutes = "0" + minutes;}
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  if (seconds < 10) {seconds = "0" + seconds;}
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds;
    
  // If the count down is over, flash 
  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "00:00:00:00";
    document.getElementById("countdown").className="flash";
  }
}, 1000);