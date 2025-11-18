
let numbers = [10, 25, 8, 32, 19];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
document.getElementById("result").innerHTML = "Sum of all elements is: " + sum;
