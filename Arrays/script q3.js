
let numbers = [10, 25, 8, 32, 19, 99];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
 if (numbers[i] > max) {
    max = numbers[i]; 
  }
}
document.getElementById("result").innerHTML = "Maximum number is: " + max;
