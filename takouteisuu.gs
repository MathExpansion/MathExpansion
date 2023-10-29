function calculatePolynomialValue(degree, coefficients, x) {
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

function testPolynomial() {
  // 多項式の次数
  var degree = 3;

  // 多項式の係数
  var coefficients = [1, 2, 3, 4];

  // 評価するxの値
  var x = 2;

  // 多項式の計算
  var result = calculatePolynomialValue(degree, coefficients, x);

  if (result !== null) {
    Logger.log("多項式の値: " + result);
  }
}

// テスト
testPolynomial();
