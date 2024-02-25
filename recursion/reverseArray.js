function reverseArray(array) {
  // base case, if array is empty return array
  if (array.length === 0) {
    return array;
  }

  // in each iteration remove first element from the array and keep it in memory
  let v = array.shift();

  // call the reverse function until array is empty
  reverseArray(array);

  // once array is empty, start pushing the last element first
  array.push(v);

  // return reverse array;
  return array;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(reverseArray(array));

function reverseArray1(array, start, end) {
  if (start > end) return;
  [array[start], array[end]] = [array[end], array[start]];
  reverseArray1(array, start + 1, end - 1);
  return array;
}

// console.log(reverseArray1(array, 0, array.length - 1));

function reverseInChunk(array, chunk) {
  if (chunk === 1) {
    return array;
  }
  let start = 0;
  let end = chunk - 1;

  while (start < end && start < array.length) {
    reverseArray1(array, start, end);
    start += chunk;
    end = start + chunk - 1;
    if (end >= array.length) {
      end = array.length - 1;
    }
  }

  return array;
}

console.log(reverseInChunk(array, 3));
