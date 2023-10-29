function PolynomialCoefficients(roots) {
  var coefficients = [];
  var degree = roots.length;

  for (var i = 0; i <= degree; i++) {
    var sum = 0;

    for (var j = 0; j < degree; j++) {
      if (i + j <= degree) {
        sum += roots[j];
      }
    }

    coefficients.push(sum);
  }

  return coefficients;
}
