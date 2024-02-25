function powerOfXN(x, n) {
  if (n < 0) return;
  if (n === 0) {
    return 1;
  }
  return x * powerOfXN(x, n - 1);
}

// console.log(powerOfXN(2, 8));

function powerOfXnOpt(x, n) {
  if (n === 0) return 1;
  let res = powerOfXnOpt(x, n / 2);
  let p = res * res;
  if (n % 2 === 1) {
    p = p * x;
  }
  return p;
}

// 2,8 => 2,7 => 2,6 => 2,5 => 2,4 => 2,3=>2,2 => 2,1 => 2,0 = 1

console.log(powerOfXnOpt(2, 8));
