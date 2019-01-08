exports.largestPrimeFactor = function(n) {
  const primeFactors = [];
  while (n % 2 === 0) {
    primeFactors.push(2);
    n = n / 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      primeFactors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    primeFactors.push(n);
  }

  return primeFactors.pop();
};
