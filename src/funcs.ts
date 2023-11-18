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
// リープマンの式の整数引数に対する実装
const riemannZeta = function riemannZeta(n: number): number {
    if (n === 1) { 
    return Infinity; // n = 1 の場合は発散するため、特別な処理が必要
    }
    return Math.pow(2, n) * Math.pow(Math.PI, n - 1) * polygamma(n - 1, 1) / fact(n);
};

function besselEquationSolver(n: number, xMax: number, stepSize: number): number[] {
    const result: number[] = [];
    
    // Initial conditions
    let y0 = 1.0;
    let y1 = 0.0;
    
    for (let x = 0; x <= xMax; x += stepSize) {
        result.push(y0);

        // Update using finite difference method
        const y2 = (2 * (n - 1) * y1 - (2 * x * y1 - x * x * y0)) / (x * x);
        
        y0 = y1;
        y1 = y2;
    }
    return result;
}

//timoshenkoEquation
function timoshenkoEquationSolver(E: number, I: number, beta1: number, beta2: number, beta3: number, beta4: number, F: (x: number) => number, xMax: number, stepSize: number): number[] {
    const result: number[] = [];

    // Initial conditions
    let w = 0.0;
    let wPrime = 0.0;
    let wDoublePrime = 0.0;
    let wTriplePrime = 0.0;

    for (let x = 0; x <= xMax; x += stepSize) {
        result.push(w);

        // Update using finite difference method
        const deltaW = stepSize * wPrime;
        const deltaWPrime = stepSize * wDoublePrime;
        const deltaWDoublePrime = stepSize * wTriplePrime;
        const deltaWTriplePrime = stepSize * ((F(x) - 2 * beta1 * wDoublePrime ** 2 - 2 * beta2 * wDoublePrime * wTriplePrime - beta3 * wDoublePrime * wDoublePrime * wPrime - beta4 * wTriplePrime) / (E * I));

        w += deltaW;
        wPrime += deltaWPrime;
        wDoublePrime += deltaWDoublePrime;
        wTriplePrime += deltaWTriplePrime;
    }
    return result;
}


// Replace the following function with the actual external force function F(x)
//const F = (x: number) => 0.0;
//const xMax = 10.0; // Replace with the desired maximum value of x
//const stepSize = 0.1; // Replace with the desired step size

//熱方程式
function heatEquationSolver(
  alpha: number, // 熱拡散係数
  length: number, // 空間の長さ
  time: number, // 計算する時間
  divisions: number, // 空間をいくつの区間に分割するか
  timeSteps: number // 時間をいくつのステップに分割するか
): number[][] {
  const dx = length / divisions;
  const dt = time / timeSteps;

  // 初期条件の設定
  const initialTemperature = 0;
  const u: number[][] = [];

  // 初期の温度分布を設定
  for (let i = 0; i <= divisions; i++) {
    u[i] = [];
    u[i][0] = initialTemperature;
  }

  // 有限差分法による熱方程式の解法
  for (let j = 1; j <= timeSteps; j++) {
    for (let i = 1; i < divisions; i++) {
      u[i][j] =
        u[i][j - 1] +
        (alpha * dt) / (dx * dx) * (u[i + 1][j - 1] - 2 * u[i][j - 1] + u[i - 1][j - 1]);
    }

    // 境界条件：端の温度を一定に保つ
    u[0][j] = initialTemperature;
    u[divisions][j] = initialTemperature;
  }
  return u;
}

//フィッツヒュー・南雲方程式
function fitzhughNagumoSolver(a: number, b: number, c: number, I: number, v0: number, w0: number, tMax: number, dt: number): { v: number[], w: number[] } {
    const numSteps = Math.floor(tMax / dt) + 1;
    const v: number[] = new Array(numSteps);
    const w: number[] = new Array(numSteps);

    v[0] = v0;
    w[0] = w0;

    for (let i = 1; i < numSteps; i++) {
        const dv = dt * (c * (v[i - 1] - (v[i - 1] ** 3) / 3 + w[i - 1] + I));
        const dw = dt * (-1 / c) * (v[i - 1] - a + b * w[i - 1]);

        v[i] = v[i - 1] + dv;
        w[i] = w[i - 1] + dw;
    }
    return { v, w };
}

//ロトカ・ヴォルテラ方程式
function lotkaVolterraSolver(alpha: number, beta: number, gamma: number, delta: number, x0: number, y0: number, tMax: number, dt: number): { x: number[], y: number[] } {
    const numSteps = Math.floor(tMax / dt) + 1;
    const x: number[] = new Array(numSteps);
    const y: number[] = new Array(numSteps);

    x[0] = x0;
    y[0] = y0;

    for (let i = 1; i < numSteps; i++) {
        const dx = dt * (alpha * x[i - 1] - beta * x[i - 1] * y[i - 1]);
        const dy = dt * (delta * x[i - 1] * y[i - 1] - gamma * y[i - 1]);

        x[i] = x[i - 1] + dx;
        y[i] = y[i - 1] + dy;
    }
    return { x, y };
}

//SIRHモデル
function sirhModelSolver(
    beta: number,
    gamma: number,
    delta: number,
    initialS: number,
    initialI: number,
    initialR: number,
    initialH: number,
    tMax: number,
    dt: number
): { S: number[], I: number[], R: number[], H: number[] } {
    const numSteps = Math.floor(tMax / dt) + 1;
    const S: number[] = new Array(numSteps);
    const I: number[] = new Array(numSteps);
    const R: number[] = new Array(numSteps);
    const H: number[] = new Array(numSteps);
    const N = initialS + initialI + initialR + initialH;

    S[0] = initialS;
    I[0] = initialI;
    R[0] = initialR;
    H[0] = initialH;

    for (let i = 1; i < numSteps; i++) {
        const dS = -beta * (S[i - 1] * I[i - 1]) / N;
        const dI = beta * (S[i - 1] * I[i - 1]) / N - gamma * I[i - 1] - delta * I[i - 1];
        const dR = gamma * I[i - 1];
        const dH = delta * I[i - 1];

        S[i] = S[i - 1] + dt * dS;
        I[i] = I[i - 1] + dt * dI;
        R[i] = R[i - 1] + dt * dR;
        H[i] = H[i - 1] + dt * dH;
    }
    return { S, I, R, H };
}

//ベルトコンベアの摩耗率
class BeltConveyor {
    private materialHardness: number; // 材料の硬度
    private beltSpeed: number; // ベルトの速度
    private contactPressure: number; // 接触圧力

    constructor(materialHardness: number, beltSpeed: number, contactPressure: number) {
        this.materialHardness = materialHardness;
        this.beltSpeed = beltSpeed;
        this.contactPressure = contactPressure;
    }

    // 摩耗率を計算するメソッド
    calculateWearRate(): number {
        // 仮の摩耗率の計算式（実際の計算式は実験データや専門的な知識に基づく必要があります）
        const wearRate = 0.001 * this.materialHardness * this.beltSpeed * this.contactPressure;

        return wearRate;
    }
}

// サンプルの使用方法
//hardness 材料の硬度（例として500と仮定）
//speed ベルトの速度（例として2.0 m/sと仮定）
//pressure 接触圧力（例として100 Paと仮定）


function classical_RK4(
  f: (t: number, y: number[]) => number[],
  y0: number[],
  t0: number,
  tMax: number,
  dt: number
): number[][] {
  const numSteps = Math.floor((tMax - t0) / dt) + 1;
  const result: number[][] = new Array(numSteps);
  let y = y0.slice();

  for (let i = 0; i < numSteps; i++) {
    result[i] = y.slice();
    const k1 = f(t0 + i * dt, y);
    const k2 = f(t0 + (i + 0.5) * dt, y.map((yi, j) => yi + 0.5 * dt * k1[j]));
    const k3 = f(t0 + (i + 0.5) * dt, y.map((yi, j) => yi + 0.5 * dt * k2[j]));
    const k4 = f(t0 + (i + 1) * dt, y.map((yi, j) => yi + dt * k3[j]));

    y = y.map((yi, j) => yi + (dt / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]));
  }

  return result;
}

function classical_RK4_2(f: (arg0: number, arg1: number) => number, y0: number, t0: number, tn: number, h: number) {
    let t = t0;
    let y = y0;
  
    const data = [];
    data.push([t, y]);
  
    while (t < tn) {
      const k1 = h * f(t, y);
      const k2 = h * f(t + h / 2, y + k1 / 2);
      const k3 = h * f(t + h / 2, y + k2 / 2);
      const k4 = h * f(t + h, y + k3);
  
      y = y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
      t = t + h;
  
      data.push([t, y]);
    }
    return data;
  }
  

// ファンデルポール方程式
function vanderPolEquation(t: number, y: number[]): number[] {
  const mu = 1.0; // パラメータ

  const dy0 = y[1];
  const dy1 = mu * (1 - y[0] ** 2) * y[1] - y[0];

  return [dy0, dy1];
}

//ロジスティック差分式
function logisticDifferenceEquation(r: number, K: number, P0: number, numSteps: number): number[] {
    const result: number[] = [];
    let P = P0;

    for (let n = 0; n < numSteps; n++) {
        result.push(P);
        P = r * P * (1 - P / K);
    }

    return result;
}

function weightedSum(...args: number[]) {
    if (args.length % 2 !== 0) {
      throw new Error('引数の数は偶数でなければなりません。');
    }
  
    let sum = 0;
    
    for (let i = 0; i < args.length; i += 2) {
      const value = args[i];
      const weight = args[i + 1];
  
      if (typeof value !== 'number' || typeof weight !== 'number') {
        throw new Error('値と重みは数値でなければなりません。');
      }
  
      sum += value * weight;
    }
    return sum;
}

function PolynomialValue(degree: number, coefficients: string | any[], x: number) {
    if (degree + 1 !== coefficients.length) {
      return null;
    }
  
    let result = 0;
  
    for (let i = 0; i <= degree; i++) {
      result += coefficients[i] * Math.pow(x, i);
    }
  
    return result;
}
  
function PolynomialCoefficients(roots: string | any[]) {
    const coefficients = [];
    const degree = roots.length;
  
    for (let i = 0; i <= degree; i++) {
      let sum = 0;
  
      for (let j = 0; j < degree; j++) {
        if (i + j <= degree) {
          sum += roots[j];
        }
      }
      coefficients.push(sum);
    }
    return coefficients;
}

class McCabeThiele {
    // McCabe-Thiele法による蒸留カラムの設計
    public static designColumn(alpha: number, beta: number): { theoreticalPlates: number, distillateComposition: number, refluxRatio: number } {
      // 操作ラインの勾配
      const m = (alpha - beta) / (beta * (1 - alpha));
  
      // 理論段数
      const theoreticalPlates = 1 / (m - 1);
  
      // 反流比
      const refluxRatio = m * theoreticalPlates / (theoreticalPlates - 1);
  
      // 蒸留液の組成
      const distillateComposition = 1 / (1 + refluxRatio);
  
      return {
        theoreticalPlates,
        distillateComposition,
        refluxRatio,
      };
    }
}
  

//ラグランジュ補間
class LagrangeInterpolator {
    private dataPoints: { x: number, y: number }[];

    constructor(dataPoints: { x: number, y: number }[]) {
        this.dataPoints = dataPoints;
    }

    // ラグランジュ補間の計算
    interpolate(x: number): number {
        let result = 0;
        const n = this.dataPoints.length;

        for (let i = 0; i < n; i++) {
            let term = this.dataPoints[i].y;

            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    term = term * (x - this.dataPoints[j].x) / (this.dataPoints[i].x - this.dataPoints[j].x);
                }
            }

            result += term;
        }

        return result;
    }
}

//スプライン補間
class NaturalSplineInterpolator {
    private dataPoints: { x: number, y: number }[];
    private coefficients: number[][];

    constructor(dataPoints: { x: number, y: number }[]) {
        this.dataPoints = dataPoints;
        this.coefficients = this.calculateCoefficients();
    }

    // スプライン補間の計算
    interpolate(x: number): number {
        const n = this.dataPoints.length;
        let result = 0;

        for (let i = 0; i < n - 1; i++) {
            const xi = this.dataPoints[i].x;
            const xi1 = this.dataPoints[i + 1].x;

            if (x >= xi && x <= xi1) {
                const h = xi1 - xi;
                const a = (xi1 - x) / h;
                const b = (x - xi) / h;

                result = a * this.dataPoints[i].y + b * this.dataPoints[i + 1].y +
                    ((a ** 3 - a) * this.coefficients[i][1] + (b ** 3 - b) * this.coefficients[i + 1][1]) * (h ** 2) / 6.0 +
                    ((a ** 2 - 1) * this.coefficients[i][2] + (b ** 2 - 1) * this.coefficients[i + 1][2]) * h / 2.0;
                break;
            }
        }

        return result;
    }

    // スプラインの係数を計算
    private calculateCoefficients(): number[][] {
        const n = this.dataPoints.length;
        const h = [];
        const alpha = [];
        const l = [];
        const mu = [];
        const z = [];

        for (let i = 0; i < n - 1; i++) {
            h.push(this.dataPoints[i + 1].x - this.dataPoints[i].x);
        }

        for (let i = 1; i < n - 1; i++) {
            alpha.push(3 / h[i] * (this.dataPoints[i + 1].y - this.dataPoints[i].y) - 3 / h[i - 1] * (this.dataPoints[i].y - this.dataPoints[i - 1].y));
        }

        l[0] = 1;
        mu[0] = 0;
        z[0] = 0;

        for (let i = 1; i < n - 1; i++) {
            l[i] = 2 * (this.dataPoints[i + 1].x - this.dataPoints[i - 1].x) - h[i - 1] * mu[i - 1];
            mu[i] = h[i] / l[i];
            z[i] = (alpha[i - 1] - h[i - 1] * z[i - 1]) / l[i];
        }

        l[n - 1] = 1;
        z[n - 1] = 0;
        const c = new Array(n).fill(0);
        const b = new Array(n).fill(0);
        const d = new Array(n).fill(0);

        for (let j = n - 2; j >= 0; j--) {
            c[j] = z[j] - mu[j] * c[j + 1];
            b[j] = (this.dataPoints[j + 1].y - this.dataPoints[j].y) / h[j] - h[j] * (c[j + 1] + 2 * c[j]) / 3;
            d[j] = (c[j + 1] - c[j]) / (3 * h[j]);
        }

        const coefficients: number[][] = [];
        for (let i = 0; i < n - 1; i++) {
            coefficients.push([this.dataPoints[i].y, b[i], c[i], d[i]]);
        }

        return coefficients;
    }
}

// RKF45の実装
const rkf45 = function rkf45(
  func: (t: number, y: number) => number,
  y0: number,
  t0: number,
  h: number,
  tEnd: number,
  tolerance: number
): { t: number[], y: number[] } {
  const resultT: number[] = [];
  const resultY: number[] = [];

  let t = t0;
  let y = y0;

  resultT.push(t);
  resultY.push(y);

  while (t < tEnd) {
    // RKF45ステップ
    const k1 = h * func(t, y);
    const k2 = h * func(t + h / 4, y + k1 / 4);
    const k3 = h * func(t + 3 * h / 8, y + 3 * k1 / 32 + 9 * k2 / 32);
    const k4 = h * func(t + 12 * h / 13, y + 1932 * k1 / 2197 - 7200 * k2 / 2197 + 7296 * k3 / 2197);
    const k5 = h * func(t + h, y + 439 * k1 / 216 - 8 * k2 + 3680 * k3 / 513 - 845 * k4 / 4104);
    const k6 = h * func(t + h / 2, y - 8 * k1 / 27 + 2 * k2 - 3544 * k3 / 2565 + 1859 * k4 / 4104 - 11 * k5 / 40);

    // 次のステップの予測値
    const yNext = y + 25 * k1 / 216 + 1408 * k3 / 2565 + 2197 * k4 / 4104 - k5 / 5;

    // 誤差の評価
    const delta = Math.abs(
      1 / 360 * k1 - 128 / 4275 * k3 - 2197 / 75240 * k4 + 1 / 50 * k5 + 2 / 55 * k6
    );

    // 次のステップのサイズの調整
    const scaleFactor = 0.84 * Math.pow(tolerance / delta, 0.25);
    const hNext = h * scaleFactor;

    // 次のステップへ進む
    t = t + h;
    y = yNext;

    // 結果を保存
    resultT.push(t);
    resultY.push(y);

    // ステップサイズの更新
    h = hNext;
  }

  return { t: resultT, y: resultY };
}

const Duffing_equation = function Duffing_equation(func: (t: number, x: number) => number, x0: number, t0: number, tEnd: number, tolerance: number, sigma: number, alpha: number, beta: number, gamma: number, omega: number) {
  const x_2dash = rkf45(
    rkf45(func,x0,t0,0.00001,tEnd,tolerance),x0,t0,0.00001,tEnd,tolerance
  ); 
  x_2dash + sigma * rkf45(func,x0,t0,0.00001,tEnd,tolerance) + alpha * x + beta * x*x*x; 
  gamma * Math.cos(omega * t);
}