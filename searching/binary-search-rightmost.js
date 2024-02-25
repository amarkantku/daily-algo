function binarySearchRightMost(array, key) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let mid = (left + right) >>> 1;
    if (array[mid] > key) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return array[right - 1] === key ? right - 1 : -1;
}

const array = [1, 4, 4, 5, 5, 5, 5, 6, 7];
console.log(binarySearchRightMost(array, 9)); // output: 2
