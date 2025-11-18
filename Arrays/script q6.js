var numbers = [11, 22, 33, 44, 55, 66, 77, 88];
document.getElementById("array").innerHTML = "Given Array: " + numbers;
var evenNumbers = [];
var oddNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers[evenNumbers.length] = numbers[i];
  } else {
    oddNumbers[oddNumbers.length] = numbers[i];
  }
}
document.getElementById("even").innerHTML = "Even Numbers: " + evenNumbers;
document.getElementById("odd").innerHTML = "Odd Numbers: " + oddNumbers;
