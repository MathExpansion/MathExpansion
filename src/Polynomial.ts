/*
Copyright 2023 MathExpansion

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
