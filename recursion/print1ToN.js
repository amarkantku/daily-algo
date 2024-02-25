function printOneToN(n) {
  // base case, kab print karna rukna hai

  if (n === 0) {
    // agar n se 0 tak kar pahug gaye to ruk jao
    return; // wapas aao
  }

  printOneToN(n - 1); // N-1 tak tum print kar do, main N print kar lunga
  // Ye lo maine N print kar liya
  console.log(n);
}

function printOneToNInReverse(n) {
  if (n === 0) {
    return;
  }
  console.log(n); // main N print karta hu tum N-1 print karo
  printOneToNInReverse(n - 1);
}

console.log(printOneToN(5));
console.log(printOneToNInReverse(5));
