function nextGreaterElement(arr, n) {
  let NGR = [];
  let stack = [];
  for (let i = 0; i < n; i++) {
    NGR[i] = -1;
    while (stack.length !== 0) {
      let top = stack[stack.length - 1];
      if (top > arr[i]) {
        NGR[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }

  return NGR;
}

console.log(nextGreaterElement([9, 4, 15, 6, 2, 10], 6));
