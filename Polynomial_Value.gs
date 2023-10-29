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
