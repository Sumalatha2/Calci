
let numbers = [10, 25, 8, 32, 19, 5];
let max = numbers[0];
let secondMax = -Infinity;  
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < max && numbers[i] > secondMax) {
    secondMax = numbers[i];
  }
}
document.getElementById("result").innerHTML = "Second Maximum Number is: " + secondMax;
