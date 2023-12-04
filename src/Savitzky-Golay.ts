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

class SavitzkyGolay {
  // Savitzky-Golay法によるデータの平滑化
<<<<<<< HEAD
  static smooth(
=======
  public static smooth(
>>>>>>> feature/81_1_3
    data: number[],
    windowSize: number,
    polynomialOrder: number
  ): number[] {
    const halfWindowSize = Math.floor(windowSize / 2);
    const result: number[] = [];

    for (let i = 0; i < data.length; i++) {
      if (i < halfWindowSize || i >= data.length - halfWindowSize) {
        // 端のデータは元のまま
        result.push(data[i]);
      } else {
        // ウィンドウ内のデータに対してSavitzky-Golay係数を適用
        const windowData = data.slice(
          i - halfWindowSize,
          i + halfWindowSize + 1
        );
        const smoothedValue = this.applySavitzkyGolay(
          windowData,
          polynomialOrder
        );
        result.push(smoothedValue);
      }
    }

    return result;
  }

  // Savitzky-Golay係数の計算
  private static calculateSavitzkyGolayCoefficients(
    windowSize: number,
    polynomialOrder: number
  ): number[] {
    const coefficients: number[] = [];
    const halfWindowSize = Math.floor(windowSize / 2);

    for (let i = -halfWindowSize; i <= halfWindowSize; i++) {
      const numerator = fact(2 * polynomialOrder);
      const denominator1 = Math.pow(fact(polynomialOrder), 2);
      const denominator2 = Math.pow(2, 2 * polynomialOrder + 1);
      const denominator = denominator1 * denominator2;

      const term1 = (2 * i + 1) / denominator;
      const term2 = this.calculateWeightedFactorial(
        polynomialOrder,
        i,
        windowSize
      );

      coefficients.push(term1 * term2);
    }

    return coefficients;
  }

  // Savitzky-Golay係数を適用して平滑化した値を計算
  private static applySavitzkyGolay(
    windowData: number[],
    polynomialOrder: number
  ): number {
    const coefficients = this.calculateSavitzkyGolayCoefficients(
      windowData.length,
      polynomialOrder
    );
    let smoothedValue = 0;

    for (let i = 0; i < windowData.length; i++) {
      smoothedValue += coefficients[i] * windowData[i];
    }

    return smoothedValue;
  }

  // 重み付き階乗を計算
  private static calculateWeightedFactorial(
    polynomialOrder: number,
    i: number,
    windowSize: number
  ): number {
    const numerator = fact(2 * polynomialOrder - 2);
    const denominator =
      fact(polynomialOrder - 2) * Math.pow(2, polynomialOrder - 1);
<<<<<<< HEAD
=======
    const result =
      (numerator / denominator) *
      Math.pow(i, polynomialOrder - 2) *
      Math.pow(windowSize, -polynomialOrder);
>>>>>>> feature/81_1_3

    return (
      (numerator / denominator) *
      Math.pow(i, polynomialOrder - 2) *
      Math.pow(windowSize, -polynomialOrder)
    );
  }
}

// サンプルデータ
//const data = [1, 2, 3, 4, 5, 8, 15, 20, 12, 9, 5, 3, 2, 1];

// Savitzky-Golay法による平滑化
//const windowSize = 5;
//const polynomialOrder = 2;
//const smoothedData = SavitzkyGolay.smooth(data, windowSize, polynomialOrder);
