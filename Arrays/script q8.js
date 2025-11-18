var arr = [45, 12, 89, 33, 22, 56, 78];
document.getElementById("array").innerHTML = "Given Array: " + arr;
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
var ascending = [];
for (var k = 0; k < arr.length; k++) {
  ascending[ascending.length] = arr[k];
}
var descending = [];
for (var m = arr.length - 1; m >= 0; m--) {
  descending[descending.length] = arr[m];
}
document.getElementById("ascending").innerHTML = "Ascending Order: " + ascending;
document.getElementById("descending").innerHTML = "Descending Order: " + descending;
