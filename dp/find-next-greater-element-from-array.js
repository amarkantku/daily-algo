function nextGreaterElement(arr, n) {
  // code here
  // let NGR = [];
  // let stack = [];

  // for(let i=0; i<n;i++) {
  //     while(stack.length !==0) {
  //         if (arr[i] > arr[stack[stack.length -1]]) {
  //             NGR[stack[stack.length -1]] = arr[i];
  //             stack.pop();
  //         } else {
  //             stack.push(i); break;
  //         }
  //     }
  //     stack.push(i);
  // }
  // while(stack.length !==0) {
  //      NGR[stack[stack.length -1]] = -1;
  //      stack.pop();
  // }
  // return NGR;

  let NGR = [];
  let stack = [];

  // Iterate over the array
  for (let i = 0; i < n; i++) {
    // While the stack is not empty and the current element is greater than the element
    // at the index stored at the top of the stack
    while (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
      // Update the next greater element for the element at the index on top of the stack
      NGR[stack.pop()] = arr[i];
    }
    // Push the current index onto the stack
    stack.push(i);
  }

  // For elements remaining in the stack, there is no greater element
  while (stack.length !== 0) {
    NGR[stack.pop()] = -1;
  }

  return NGR;
}
