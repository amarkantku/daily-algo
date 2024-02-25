function binarySearchLeftMost(array, key) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;
    if (key > array[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

const array = [1, 4, 4, 5, 5, 6, 7];
console.log(binarySearchLeftMost(array, 5)); // output: 3
