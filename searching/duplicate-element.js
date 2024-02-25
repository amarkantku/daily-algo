let array = [11, 23, 11, 23, 25];

function nonDuplicate(array) {
  let xor = array[0];
  for (i = 1; i < array.length; i++) {
    xor = xor ^ array[i];
  }
  return xor;
}

console.log(nonDuplicate(array));
