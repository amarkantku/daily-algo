function findTwoSum(array, target) {
  let start = 0;
  let end = array.length - 1;
  array.sort((a, b) => a - b);
  while (start < end) {
    let sum = array[start] + array[end];
    if (sum === target) {
      return true;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
}

console.log(findTwoSum([4, 5, 14, 9, 11, 17, 34, 32], 48));
