let userInputName = prompt("What is your name?");

let greeting = document.querySelector("#myName");
greeting.innerHTML = userInputName;

function showTime() {
  const clockElement = document.getElementById("myClock");

  setInterval(function () {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.toLocaleDateString("en-US", { weekday: "long" });

    const time = `${hours}:${minutes}:${seconds}`;

    clockElement.innerHTML = time + " " + day;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", showTime);
