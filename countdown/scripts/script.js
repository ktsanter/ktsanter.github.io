 $(document).ready(function() {
  docountdown('#myDeadline');
});

function docountdown(deadlineSourceId) {
  var deadline = $(deadlineSourceId).html();
  var countdownDate = new Date(deadline).getTime();
  var endMonth = new Date(deadline).getMonth() + 1;
  var endDate = new Date(deadline).getDate();
  var endMMDD = ("00" + endMonth).slice(-2) + '/' + ("00" + endDate).slice(-2);

  updatecountdown(countdownDate, endMMDD);
  var tmr = setInterval(function() {
    var done = updatecountdown(countdownDate, endMMDD)
    if (done)
      clearInterval(tmr);
  }, 1000);
}

function updatecountdown(countdownDate, endMMDD) {
  var countdownDone = false;
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = ("00" + days).slice (-2);
  hours = ("00" + hours).slice (-2);
  minutes = ("00" + minutes).slice (-2);
  seconds = ("00" + seconds).slice (-2);
    
  if (distance >= 0) {
    $("#ctdEndDate").html('Course ends ' + endMMDD);
    $("#ctdDays").html(days);
    $("#ctdHours").html(hours);
    $("#ctdMinutes").html(minutes);
    $("#ctdSeconds").html(seconds);

  } else {
    countdownDone = true;
    $("#ctdEndDate").html("Course has ended");
    $("#ctdDays").html('00');
    $("#ctdHours").html('00');
    $("#ctdMinutes").html('00');
    $("#ctdSeconds").html('00');
    $(".countdown-title").addClass('expired');
    $(".countdown-num").addClass('expired');
    $(".countdown-label").addClass('expired');
  }
  
  return countdownDone;
}

