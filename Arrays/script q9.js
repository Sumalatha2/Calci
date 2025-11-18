var arr = [10, 20, 30, 40, 50, 60];
document.getElementById("original").innerHTML = "Original Array: " + arr;
var reversedArr = [];
var index = 0;
for (var i = arr.length - 1; i >= 0; i--) {
  reversedArr[index] = arr[i];
  index++;
}
document.getElementById("reversed").innerHTML = "Reversed Array: " + reversedArr;
