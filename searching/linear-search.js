const array = [1, 2, 8, 4, 7];

function linearSearch(inputArray, serachKey) {
  let foundIndex = -1;
  for (let i = 0, len = inputArray.length; i < len; i++) {
    if (inputArray[i] === serachKey) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
}

console.log(linearSearch(array, 7)); // 4
console.log(linearSearch(array, 9)); // -1
