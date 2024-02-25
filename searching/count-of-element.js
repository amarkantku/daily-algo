function elementFirstPosition(array, element) {
  let start = 0;
  let end = array.length - 1;

  let firstPosition = -1;
  while (start <= end) {
    let mid = (start + end) >>> 1;
    if (array[mid] == element) {
      firstPosition = mid;
      end = mid - 1;
    } else if (array[mid] > element) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return firstPosition;
}

function elementLastPosition(array, element) {
  let start = 0;
  let end = array.length - 1;
  let lastPosition = -1;

  while (start <= end) {
    let mid = (start + end) >>> 1;
    if (array[mid] == element) {
      lastPosition = mid;
      start = mid + 1;
    } else if (array[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return lastPosition;
}

function countOfElements(array, element) {
  const firstPosition = elementFirstPosition(array, element);
  const lastPosition = elementLastPosition(array, element);

  if (lastPosition !== -1) {
    return lastPosition - firstPosition + 1;
  }
  return -1;
}

const array = [1, 1, 2, 2, 2, 2, 3];
console.log(countOfElements(array, 2));
