// in VSCode: Debug > Run without Debugging / Ctrl + F5
// Output will be available in Debug Console

var arr = [100, 3, 10, 2, 7, 8, 1, 5, 1];

console.log("input:", arr);
console.log("input length:", arr.length);

console.log("Bubble sort:");
console.log("result: ", bubbleSort(arr)); // optimized with swapped flag

function bubbleSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    // loop - i elements
    var swapped = false; // for optimization
    for (j = 0; j < arr.length - i - 1; j++) {
      // swap if greater
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    if (!swapped) {
      return arr;
    }
    console.log(i + 1 + ". " + arr);
  }
  return arr;
}

console.log("Selection sort:");
console.log("result: ", selectionSort(arr));

function selectionSort(arr) {
  for (wall = 0; wall < arr.length - 1; wall++) {
    // find smallest
    smallestIndex = wall;
    for (j = wall + 1; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }
    // swap
    var temp = arr[smallestIndex];
    arr[smallestIndex] = arr[wall];
    arr[wall] = temp;
    console.log(wall + 1 + " . " + arr);
  }
  return arr;
}
