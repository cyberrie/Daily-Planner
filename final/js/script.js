// Display curent date and time in header

setInterval(function () {
  let currentDateTime = moment();
  $("#current-date-time").text(
    currentDateTime.format("dddd, MMMM Do hh:mm:ss ")
  );
}, 1000);

// Timeblock Grid

// current time

// target textarea for color-change
const textInputArea = $(".textarea");
// current hour to check against
let currentHour = parseInt(moment().format("H"));

// if past color textarea gray
// if current, textarea red color (within next hour)
// if future, textarea green color

// allow user to enter and event when they click timeblock

$("textarea").on("click", function () {});
//save the event in local storage when save button is clicked in that timeblock
// persist events between refreshes of a page
