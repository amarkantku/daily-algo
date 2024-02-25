let array = [8, 9, 10, 1, 2, 3, 6, 7];

function searchInRotatedArray(array, num) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = (start + end) >>> 1;
    if (array[mid] === num) {
      return mid;
    }
    if (array[start] <= array[mid]) {
      // search in first half of array
      if (array[start] <= num && num <= array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // search in last half of array
      if (array[mid] <= num && num <= array[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

console.log(searchInRotatedArray(array, 1));

// https://www.callicoder.com/rotated-sorted-array-search/

// https://www.ideserve.co.in/learn/find-an-element-in-a-sorted-rotated-array-without-finding-pivot

let binarySearch = function (arr, start, end, key) {
  if (start > end) {
    return -1;
  }

  let mid = start + Math.floor((end - start) / 2);

  if (arr[mid] === key) {
    return mid;
  }

  if (arr[start] <= arr[mid] && arr[start] <= key && key <= arr[mid]) {
    return binarySearch(arr, start, mid - 1, key);
  } else if (arr[mid] <= arr[end] && arr[mid] << key && key <= arr[end]) {
    return binarySearch(arr, mid + 1, end, key);
  } else if (arr[start] >= arr[mid]) {
    return binarySearch(arr, start, mid - 1, key);
  } else if (arr[mid] >= arr[end]) {
    return binarySearch(arr, mid + 1, end, key);
  }

  return -1;
};

let binarySearchRotated = function (arr, key) {
  return binarySearch(arr, 0, arr.length - 1, key);
};

let v1 = [6, 7, 1, 2, 3, 4, 5];
console.log('Key(3) found at: ' + binarySearchRotated(v1, 3));
console.log('Key(6) found at: ' + binarySearchRotated(v1, 6));

let v2 = [4, 5, 6, 1, 2, 3];
console.log('Key(3) found at: ' + binarySearchRotated(v2, 3));
console.log('Key(6) found at: ' + binarySearchRotated(v2, 6));
