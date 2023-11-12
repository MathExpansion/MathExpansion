class SavitzkyGolay {
  // Savitzky-Golay法によるデータの平滑化
  public static smooth(data: number[], windowSize: number, polynomialOrder: number): number[] {
    const halfWindowSize = Math.floor(windowSize / 2);
    const result: number[] = [];

    for (let i = 0; i < data.length; i++) {
      if (i < halfWindowSize || i >= data.length - halfWindowSize) {
        // 端のデータは元のまま
        result.push(data[i]);
      } else {
        // ウィンドウ内のデータに対してSavitzky-Golay係数を適用
        const windowData = data.slice(i - halfWindowSize, i + halfWindowSize + 1);
        const smoothedValue = this.applySavitzkyGolay(windowData, polynomialOrder);
        result.push(smoothedValue);
      }
    }

    return result;
  }

  // Savitzky-Golay係数の計算
  private static calculateSavitzkyGolayCoefficients(windowSize: number, polynomialOrder: number): number[] {
    const coefficients: number[] = [];
    const halfWindowSize = Math.floor(windowSize / 2);

    for (let i = -halfWindowSize; i <= halfWindowSize; i++) {
      const numerator = this.factorial(2 * polynomialOrder);
      const denominator1 = Math.pow(this.factorial(polynomialOrder), 2);
      const denominator2 = Math.pow(2, (2 * polynomialOrder + 1));
      const denominator = denominator1 * denominator2;

      const term1 = (2 * i + 1) / denominator;
      const term2 = this.calculateWeightedFactorial(polynomialOrder, i, windowSize);

      coefficients.push(term1 * term2);
    }

    return coefficients;
  }

  // Savitzky-Golay係数を適用して平滑化した値を計算
  private static applySavitzkyGolay(windowData: number[], polynomialOrder: number): number {
    const coefficients = this.calculateSavitzkyGolayCoefficients(windowData.length, polynomialOrder);
    let smoothedValue = 0;

    for (let i = 0; i < windowData.length; i++) {
      smoothedValue += coefficients[i] * windowData[i];
    }

    return smoothedValue;
  }

  // 階乗を計算
  private static factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }

    return n * this.factorial(n - 1);
  }

  // 重み付き階乗を計算
  private static calculateWeightedFactorial(polynomialOrder: number, i: number, windowSize: number): number {
    const numerator = this.factorial(2 * polynomialOrder - 2);
    const denominator = this.factorial(polynomialOrder - 2) * Math.pow(2, polynomialOrder - 1);
    const result = (numerator / denominator) * Math.pow(i, polynomialOrder - 2) * Math.pow(windowSize, -polynomialOrder);

    return result;
  }
}

// サンプルデータ
const data = [1, 2, 3, 4, 5, 8, 15, 20, 12, 9, 5, 3, 2, 1];

// Savitzky-Golay法による平滑化
const windowSize = 5;
const polynomialOrder = 2;
const smoothedData = SavitzkyGolay.smooth(data, windowSize, polynomialOrder);
