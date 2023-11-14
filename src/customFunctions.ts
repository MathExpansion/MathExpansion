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
/*
This is a custom function that returns the value of a cycloid.
Either variable x or y can be omitted.
@customfunction
@param r radius theta theta x x y y
*/
const cycloid = function cycloid(r: number, theta: number, x: any, y: number) {
  if ((x = undefined)) {
    return r * (1 - Math.cos(theta));
  } else {
    return r * (theta - Math.sin(theta));
  }
};

const entropy_kB = function Entropy_kB(
  number_of_particles_a: number,
  number_of_particles_b: number
) {
  //return k_b * Math.log();
};

const lengevin = (x: number) => ((1 / Math.tanh(x)) - 1) / x;

/*
Returns the root mean square velocity, which is the velocity of the molecule.
@param T Temperature
@param M Molecular weight per mol
@customfunction
*/

const rmsv = (T: number, M: number) =>  Math.sqrt((3 * gas_const * T) / M);

const rho_NTP = (molar_mass: number) => (molar_mass * atm) / (gas_const * T0);

const mass_wave = (m: number, T: number) =>  h_Planck / (m * rmsv(T, m * n_a));

const rad = (degree: number) =>  degree * (Math.PI / 180);

const deg = (radian: number) =>  radian / (Math.PI / 180);

const sawtooth = (t: number) =>  t - Math.floor(t);

const squareWave = (t: number) => Math.sign(Math.sin(t));

const nernst = (C_Inside: number, C_Outside: number, ion_valent: number, K: number) => 
  ((gas_const * K) / (ion_valent * Faraday_const)) * Math.log(C_Outside / C_Inside);

const re = (rho: number, v: number, η: number, D: number) =>(rho * v * D) / η;


const integral = function integral(fx: any,start: number, end: number, r: number) {
  //fxには任意のリテラルカスタム関数を引数として入れてあげる，微小変位させたい引数はテスト時任意に指定する必要有り
    let dx = 0.00001;
    if (start > end) {
      [start, end] = [end, start];
    }
      for (var x = start; x < end; x += dx) {
        r += fx * dx;
      }
    return r;
}

const free_energy = (T: number, H: number, S: number) =>  H - T * S;

// 高速フーリエ変換を実行する関数
const fft = function fft(data: string | any[], k: number) {
  const n = data.length;
  let realPart = 0;
  let imagPart = 0;

  for (let t = 0; t < n; t++) {
    const angle = (2 * Math.PI * k * t) / n;
    realPart += data[t][0] * Math.cos(angle);
    imagPart -= data[t][0] * Math.sin(angle);
  }

  return { real: realPart, imag: imagPart };
};

const fact = function fact(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};

const youngLaplace = (
  radius: number,
  gamma: number,
  rho_Inside: number,
  rho_Outside: number) => ((2 * gamma) / radius) * (rho_Inside - rho_Outside);

const poissonDist = function (lambda: number, x: number) {
  const numerator = Math.exp(-lambda) * Math.pow(lambda, x);
  const denominator = fact(x);
  const probability = numerator / denominator;
  return probability;
};

const ButlerVolmerEq = function(T: number, E: number, E_standard: number) { 
  const k0 = Math.pow(10, -3); // 電極反応速度定数 (A/cm^2/mol^m/s)
  const alpha = 0.5; // 電極反応の電子移動数

  return  k0 * Math.exp((alpha * Faraday_const * (E - E_standard)) / (gas_const * T));
};

// Calculate the energy of electromagnetic waves emitted from a black body using Stefan Boltzmann's law
const black_body_energy = (Kelvintemperature: number) => 
    ((2 * Math.PI * h_Planck * Math.pow(speedOfLight, 2)) / Math.pow(k_b, 4)) * Math.pow(Kelvintemperature, 4);

//Find the angle between the crystal plane and the X-ray using Bragg's law
const braggAngle = (wavelength: number, order: number, latticeSpacing: number) => 
    deg(Math.asin((order * wavelength) / (2 * latticeSpacing)));

const clothoid = function clothoidCurve(a: number, b: number, stepSize: number) {
  const data = [];
    
  for (let t = 0; t <= a * Math.sqrt(b); t += stepSize) {
    const x = Math.cos((a * t * t) / 2);
    const y = Math.sin((a * t * t) / 2);
    data.push([x,y]);
    }
    
    sheet.getRange(1, 1, data.length, data[0,0].length).setValues(data);
}

// ポリガンマ関数の計算
const polygamma = function polygamma(n: number, x: number): number {
  if (n === 0) {
  return Math.log(x);
  }
  return polygamma(n - 1, x + 1) + 1 / Math.pow(x, n);
};

const multinomial = function MULTINOMIAL() {
  const sum = args.reduce((acc, val) => {
    return acc + val;
  }, 0); // 引数の合計を計算

  if (sum <= 0) {
    return '#NUM!'; // エラー処理：合計が非正の場合
  }

  let result = fact(sum);

  for (let i = 0; i < args.length; i++) {
    if (args[i] <= 0) {
      return '#NUM!'; // エラー処理：非正の引数がある場合
    }
    result /= fact(args[i]);
  }

  return result;
}