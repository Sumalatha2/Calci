
document.getElementById("timeoutOutput").textContent = "Start\n";

setTimeout(() => {
  document.getElementById("timeoutOutput").textContent += "This runs after 6 seconds\n";
}, 6000);

document.getElementById("timeoutOutput").textContent += "End\n";


let count = 1;
let outputBox = document.getElementById("intervalOutput");

let timer = setInterval(() => {
  outputBox.textContent += "Count: " + count + "\n";
  count++;

  if (count > 5) {
    outputBox.textContent += "Stopped interval!\n";
    clearInterval(timer);
  }

}, 1000);