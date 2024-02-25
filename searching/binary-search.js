function binarySearch(array, key, low, high) {
  if (low > high) return -1;

  // https://stackoverflow.com/questions/13785210/why-in-java-high-low-2-is-wrong-but-high-low-1-is-not
  let mid = (low + high) >>> 1;
  // let mid = low + ((high - low) >>> 1)
  if (array[mid] === key) {
    return mid;
  } else if (array[mid] < key) {
    return binarySearch(array, key, mid + 1, high);
  } else {
    return binarySearch(array, key, low, mid - 1);
  }
}

const array = [1, 4, 6, 7, 9, 23, 45, 60];

function binaryItrSearch(array, key) {
  let low = 0;
  let high = array.length - 1;
  let foundIndex = -1;

  while (low < high) {
    let mid = (low + high) >>> 1;

    if (array[mid] === key) {
      foundIndex = mid;
      break;
    }

    if (key > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return foundIndex;
}

console.log('Iterative: ', binaryItrSearch(array, 45));

console.log('Recursive: ', binarySearch(array, 5, 0, array.length - 1));
