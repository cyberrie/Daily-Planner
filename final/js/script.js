// Display curent date and time in header

setInterval(function () {
  let currentDateTime = moment();
  $("#current-date-time").text(
    currentDateTime.format("dddd, MMMM Do hh:mm:ss ")
  );
}, 1000);

// Timeblock Grid
