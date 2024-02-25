// function removeDuplicatesFromSortedArray(array) {
//   let i = 0;
//   let j = 0;
//   let n = array.length;
//   while (i < n) {
//     if (array[i] === array[j]) {
//       [array[i], array[j]] = [array[j], array[i]];
//     } else {
//       j++;
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     i++;
//   }
//   array.length = j + 1;
//   return array;
// }

function removeDuplicatesFromSortedArray(array) {
  let n = array.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (array[i] === array[i + 1]) {
      continue;
    }
    array[j++] = array[i];
  }
  array.length = j;
  return array;
}

let array = [1, 1, 1, 3, 5, 5, 7];

console.log(removeDuplicatesFromSortedArray(array));
