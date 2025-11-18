
let numbers = [10, 25, 8, 1, 32, 19, 5];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
let secondMin = Infinity;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > min && numbers[i] < secondMin) {
    secondMin = numbers[i];
  }
}
document.getElementById("result").innerHTML = "Second Minimum Number is: " + secondMin;


