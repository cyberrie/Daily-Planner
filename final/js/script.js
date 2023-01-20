// Display curent date and time in header

setInterval(function () {
  let currentDateTime = moment();
  $("#current-date-time").text(
    currentDateTime.format("dddd, MMMM Do hh:mm:ss ")
  );
}, 1000);

// Timeblock Grid

// current time

// currentTime to determine if the hour matches for color

// if past color gray
// if future red color
// if more than 1hr left (future) color green
// allow user to enter and event when they click timeblock

$("textarea").on("click", function () {});
//save the event in local storage when save button is clicked in that timeblock
// persist events between refreshes of a page
