// Display curent date and time in header

setInterval(function () {
  let currentDateTime = moment();
  $("#current-date-time").text(
    currentDateTime.format("dddd, MMMM Do hh:mm:ss ")
  );
}, 1000);

// Timeblock Grid

// current time

// textArea elements
let hourly9El = $("#9");
let hourly10El = $("#10");
let hourly11El = $("#11");
let hourly12El = $("#12");
let hourly13El = $("#13");
let hourly14El = $("#14");
let hourly15El = $("#15");
let hourly16El = $("#16");
let hourly17El = $("#17");

// Array of textInputAreas
let hourlySlots = [
  hourly9El,
  hourly10El,
  hourly11El,
  hourly12El,
  hourly13El,
  hourly14El,
  hourly15El,
  hourly16El,
  hourly17El,
];

function checkForColors() {
  // current hour to check against
  let currentHour = parseInt(moment().format("kk"));
  console.log(currentHour);

  // loop through the array to check for colors, add classes accordingly
  for (let i = 0; i < hourlySlots.length; i++) {
    hourlySlots[i].removeClass("current past present");

    // if past color textarea gray
    if (currentHour > hourlySlots[i].data("hour")) {
      hourlySlots[i].addClass("past");
      // if current, textarea red color
    } else if (currentHour === hourlySlots[i].attr("data-hour")) {
      hourlySlots[i].addClass("present");
    } else {
      // if future, textarea green color
      hourlySlots[i].addClass("future");
    }
  }
}

checkForColors();

// allow user to enter and event when they click timeblock

$("textarea").on("click", function () {});
//save the event in local storage when save button is clicked in that timeblock
// persist events between refreshes of a page
