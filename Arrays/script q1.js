
let numbers = [10, 25, 2, 8, 32, 3, 19];
let min = Infinity;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i]; 
  }
}
document.getElementById("result").innerHTML = "Minimum number is: " + min;

