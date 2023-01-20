// Display curent date and time in header
setInterval(function () {
  let currentDateTime = moment();
  $("#current-date-time").text(
    currentDateTime.format("dddd, MMMM Do H:mm:ss ")
  );
}, 1000);

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

// Set the colors depending on the hour
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
    } else if (currentHour === hourlySlots[i].data("hour")) {
      hourlySlots[i].addClass("present");
    } else {
      // if future, textarea green color
      hourlySlots[i].addClass("future");
    }
  }
}

checkForColors();

// allow user to enter and event when they click timeblock
let textInputArea = $("textarea");
function insertText() {
  let text = "";
  // check if textarea is currently focussed
  if (document.activeElement === textInputArea) {
    // if yes, insert the text at the cursor position

    let start = textInputArea.selectionStart;
    let end = textInputArea.selectionEnd;
    textInputArea.value =
      textInputArea.value.substring(0, start) +
      text +
      textInputArea.value.substring(end, textInputArea.value.length);
  } else {
    // If it's not focused, append the text to the end
    textInputArea.value += text;
  }
}

textInputArea.on("click", insertText);

//save the event in local storage when save button is clicked in that timeblock
$(".saveBtn").on("click", function () {});
// persist events between refreshes of a page
