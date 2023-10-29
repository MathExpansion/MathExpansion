function calculatePolynomialCoefficients(roots) {
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

function testPolynomialCoefficients() {
  // 既知の多項式のルート
  var roots = [1, 2, 3]; // 3次の多項式のルート

  // 多項式の係数を計算
  var coefficients = calculatePolynomialCoefficients(roots);

  Logger.log("多項式の係数: " + coefficients.join(", "));
}

// テスト
testPolynomialCoefficients();
