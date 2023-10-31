//sheet_loading
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const sheet = spreadsheet.getActiveSheet();

//getter
const dataRange = sheet.getDataRange();
const values = dataRange.getValues();
const numRows = values.length;

//physical_constants
const k_b = Math.pow(1.380649,-23);
const n_a = Math.pow(6.02214076,23);
const h_Planck = Math.pow(6.62607015,-34);
const atm = 101325;
const T0 = 273.15;
const gas_const = k_b * n_a;
const electron_mass = Math.pow(9.1093837015,-31);
const elementary_charge = Math.pow(1.602176634,-19);
const Faraday_const = n_a * elementary_charge ;
const mass_electron = Math.pow(9.1093837015,-31);
const imag_unit = [
  [0 , -1],
  [1 , 0]
];

//Gaussian integral or Euler Poisson integral [-inf,inf]exp(-x^2)dx
const gaussian_integral = Math.sqrt(Math.PI);

//infinity
const inf = Infinity;
const minus_inf = -Infinity;

//Fourier_Transform
var FT_appendRow = outputSheet.appendRow(["Frequency", "Amplitude", "Phase"]);
var frequency = k * sampleRate / numRows;
var frequency = k * sampleRate / numRows;
var appendrow = appendRow(["Frequency", "Amplitude", "Phase"]);
var amplitude = Math.hypot(x,y);
//var amplitude = Math.sqrt(fftData.real * fftData.real + fftData.imag * fftData.imag);
var phase = Math.atan2(y,x);

// 引数を配列に変換
var args = Array.prototype.slice.call(arguments);

