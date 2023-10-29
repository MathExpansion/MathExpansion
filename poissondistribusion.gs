function poissonDistribution(lambda, x) {

  var numerator = Math.exp(-lambda) * Math.pow(lambda, x);
  var denominator = fact(x);
  var probability = numerator / denominator;
  return probability;
}
