class BesselFunction {
  // ベッセル関数の近似計算（バイナリヒープ法）
  private static calculateBesselApproximation(x: number, nMax: number): number {
    let result = 0;
    let numerator = 1;
    let denominator = 1;

    for (let n = 0; n <= nMax; n++) {
      const term = numerator / denominator;
      result += term;

      // 更新
      numerator *= -x * x;
      denominator *= (n + 1) * (n + 1);
    }

    return result;
  }

  // 第一種ベッセル関数の近似計算
  public static besselJ(x: number, nMax: number = 10): number {
    // x が 0 の場合は 1 を返す
    if (x === 0) {
      return 1;
    }

    // x が十分に大きい場合は近似計算を行う
    if (x > 10) {
      return Math.sqrt(2 / (Math.PI * x)) * Math.cos(x - Math.PI / 4);
    }

    return BesselFunction.calculateBesselApproximation(x, nMax);
  }

  // 第二種ベッセル関数の近似計算
  public static besselY(x: number, nMax: number = 10): number {
    // x が 0 の場合は無限大に発散する
    if (x === 0) {
      return Infinity;
    }

    // x が十分に大きい場合は近似計算を行う
    if (x > 10) {
      return Math.sqrt(2 / (Math.PI * x)) * Math.sin(x - Math.PI / 4);
    }

    return BesselFunction.calculateBesselApproximation(x, nMax);
  }
}

// サンプルデータ
const x = 2.0;

// 第一種ベッセル関数の計算
const besselJResult = BesselFunction.besselJ(x);
console.log(`Bessel J(${x}) = ${besselJResult}`);

// 第二種ベッセル関数の計算
const besselYResult = BesselFunction.besselY(x);
console.log(`Bessel Y(${x}) = ${besselYResult}`);
