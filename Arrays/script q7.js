var arr = [10, 20, 30, 10, 40, 50, 20, 60, 30, 10];
document.getElementById("array").innerHTML = "Given Array: " + arr;
var duplicates = []; 
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      var alreadyPresent = false;
      for (var k = 0; k < duplicates.length; k++) {
        if (duplicates[k] === arr[i]) {
          alreadyPresent = true;
          break;
        }
      }
      if (!alreadyPresent) {
        duplicates[duplicates.length] = arr[i];
      }
    }
  }
}
document.getElementById("duplicates").innerHTML = "Duplicate Elements: " + duplicates;
