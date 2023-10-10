// Get user's name and display it in the HTML
let userInputName = prompt("What is your name?");
let greeting = document.querySelector("#myName");
greeting.innerHTML = userInputName;

// Define a function to display the time
function showTime() {
  const clockElement = document.getElementById("myClock");

  // Use a timer to update the time every second
  setInterval(function () {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Get the day of the week in long format (e.g., "Monday")
    const day = date.toLocaleDateString("en-US", { weekday: "long" });

    // Combine the time and day and place it into the HTML
    const time = `${hours}:${minutes}:${seconds}`;
    clockElement.innerHTML = time + " " + day;
  }, 1000); // Update every second
}

// Call the function to display the time when the page is loaded
document.addEventListener("DOMContentLoaded", showTime);
