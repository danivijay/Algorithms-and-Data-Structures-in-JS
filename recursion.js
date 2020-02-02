var n = 6;

console.log("n: ", n);
console.log("factorial: ", factorial(n));

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
