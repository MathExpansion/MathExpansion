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

//sheet_loading
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const sheet = spreadsheet.getActiveSheet();

//getter
const dataRange = sheet.getDataRange();
const values = dataRange.getValues();
const numRows = values.length;

//physical_constants
const k_b = Math.pow(1.380649, -23);
const n_a = Math.pow(6.02214076, 23);
const h_Planck = Math.pow(6.62607015, -34);
const atm = 101325;
const T0 = 273.15;
const gas_const = k_b * n_a;
const electron_mass = Math.pow(9.1093837015, -31);
const elementary_charge = Math.pow(1.602176634, -19);
const Faraday_const = n_a * elementary_charge;
const mass_electron = Math.pow(9.1093837015, -31);
const speedOfLight = 299792458;
const imag_unit = [
  [0, -1],
  [1, 0],
];

//Gaussian integral or Euler Poisson integral [-inf,inf]exp(-x^2)dx
const gaussian_integral = Math.sqrt(Math.PI);

//infinity,golden_number
const minus_inf = -Infinity;
const golden_number = (1 + Math.sqrt(5)) / 2;

//Fourier_Transform


// 引数を配列に変換
const args = Array.prototype.slice.call(arguments);
