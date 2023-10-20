function testPoissonDistribution(lambda,x) {

  var probability = poissonDistribution(lambda, x);
  Logger.log("P(X = " + x + ") = " + probability);
}

function poissonDistribution(lambda, x) {

  var numerator = Math.exp(-lambda) * Math.pow(lambda, x);
  var denominator = factorial(x);
  var probability = numerator / denominator;
  return probability;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}