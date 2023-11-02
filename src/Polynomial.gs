function PolynomialValue(degree, coefficients, x) {
  if (degree + 1 !== coefficients.length) {
    Logger.log("係数の数が次数に対して正しくありません。");
    return null;
  }

  var result = 0;

  for (var i = 0; i <= degree; i++) {
    result += coefficients[i] * Math.pow(x, i);
  }

  return result;
}

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
