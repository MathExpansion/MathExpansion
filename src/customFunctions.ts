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
const cycloid = function cycloid(r, theta, x, y) {
  if ((x = undefined)) {
    return r * (1 - Math.cos(theta));
  } else {
    return r * (theta - Math.sin(theta));
  }
};

const entropy_kB = function Entropy_kB(
  number_of_particles_a,
  number_of_particles_b
) {
  return k_b * Math.log();
};

const lengevin = function Lengevin(x) {
  return 1 / Math.tanh(x) - 1 / x;
};

/*
Returns the root mean square velocity, which is the velocity of the molecule.
@param T Temperature
@param M Molecular weight per mol
@customfunction
*/

const rmsv = function RMSV(T, M) {
  return Math.sqrt((3 * gas_const * T) / M);
};

const rho_NTP = function density_NTP(molar_mass) {
  return (molar_mass * atm) / (gas_const * T0);
};

const mass_wave = function de_Broglie_wave(m, T) {
  return h_Planck / (m * rmsv(T, m * n_a));
};

const rad = function degToRad(degree) {
  return degree * (Math.PI / 180);
};

const deg = function radToDeg(radian) {
  return radian / (Math.PI / 180);
};

const sawtooth = function sawtooth(t) {
  return t - Math.floor(t);
};

const squareWave = function squareWave(t) {
  return Math.sign(Math.sin(t));
};

const nernst = function Nernst(C_Inside, C_Outside, ion_valent, K) {
  return (
    ((gas_const * K) / (ion_valent * Faraday_const)) *
    Math.log(C_Outside / C_Inside)
  );
};

const re = function ReynoldsNumber(rho, v, η, D) {
  return (rho * v * D) / η;
};

// const integral = function integral(fx,start, end, r) {
//fxには任意のリテラルカスタム関数を引数として入れてあげる，微小変位させたい引数はテスト時任意に指定する必要有り
//   let dx = 0.00001;
//   if (start > end) {
//     [start, end] = [end, start];
//   }
//   for (var x = start; x < end; x += dx) {
//     r += fx * dx;
//   }
//   return r;
// }

const free_energy = function free_Energy(T, H, S) {
  return H - T * S;
};

// 高速フーリエ変換を実行する関数
const fft = function fft(data, k) {
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

const fact = function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};

const youngLaplace = function youngLaplace(
  radius,
  gamma,
  rho_Inside,
  rho_Outside
) {
  const deltaDensity = rho_Inside - rho_Outside;
  return ((2 * gamma) / radius) * deltaDensity;
};

const poissonDist = function poissonDistribution(lambda, x) {
  const numerator = Math.exp(-lambda) * Math.pow(lambda, x);
  const denominator = fact(x);
  const probability = numerator / denominator;
  return probability;
};

function ButlerVolmerEquation(T, E, E_standard) {
  const k0 = Math.pow(10, -3); // 電極反応速度定数 (A/cm^2/mol^m/s)
  const alpha = 0.5; // 電極反応の電子移動数

  return (
    k0 * Math.exp((alpha * Faraday_const * (E - E_standard)) / (gas_const * T))
  );
}
