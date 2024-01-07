var alarmTime = [];
var alarmSet = false;
var option = document.getElementById("schedule");

function validateInput(input) {
  // Ensure the input does not start with zero except for a single digit '0'
  if (input.value.length === 2 && input.value.charAt(0) === "0") {
    input.value = input.value.charAt(1);
  }
}

function currentTime() {
  var timeElement = document.getElementById("currentTime");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  // Update the content of the <div>
  var timeFormat = hours + ":" + minutes + ":" + seconds;
  timeElement.textContent = timeFormat;
  for (let i of alarmTime) {
    if (timeFormat == i) {
      alert("Wake up Dude!");
    }
  }
}

// Updating the time every second
setInterval(currentTime, 1000);

function setAlarm() {
  var hour = document.getElementById("hourInput");
  var minute = document.getElementById("minuteInput");

  var alarmHour = hour.value;
  var alarmMinute = minute.value;

  if (alarmHour !== "" && alarmMinute !== "") {
    // Check if values are within the specified range
    if (
      parseInt(alarmHour, 10) >= 0 &&
      parseInt(alarmHour, 10) <= 23 &&
      parseInt(alarmMinute, 10) >= 0 &&
      parseInt(alarmMinute, 10) <= 59
    ) {
      var time = alarmHour + ":" + alarmMinute + ":" + "0";
      alarmTime.push(time);
      const txt = document.createElement("p");
      txt.textContent = time;
      const btn = document.createElement("button");
      btn.textContent = "Delete";
      const opt = document.createElement("div");

      // Append txt and btn to the container div
      opt.appendChild(txt);
      opt.appendChild(btn);

      // Append the container div to the option
      option.appendChild(opt);

      // Add an onclick event listener to the button
      btn.addEventListener("click", function () {
        // Remove the container div from the DOM
        option.removeChild(opt);

        // Find the index of the clicked alarm time
        const index = alarmTime.indexOf(time);

        // If found, remove it from the alarmTime array
        if (index !== -1) {
          alarmTime.splice(index, 1);
        }
      });
    } else {
      alert(
        "Invalid input. HH should be between 0-23, MM should be between 0-59."
      );
    }
  } else {
    alert("Please enter both HH and MM values.");
  }
}
