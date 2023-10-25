//sheet_loading
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const sheet = spreadsheet.getActiveSheet();

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

//Math_property
const e = Math.E;
const ln2 = Math.LN2;
const ln10 = Math.LN10;
const log2e = Math.LOG2E;
const log10e = Math.LOG10E;
const pi = Math.PI;
const sqrt1_2 = Math.SQRT1_2;
const sqrt2 = Math.SQRT2;
const rand = Math.random();

//FT_reference
function FT_reference_() {
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var numRows = values.length;
}

//Gaussian integral or Euler Poisson integral [-inf,inf]exp(-x^2)dx
const gaussian_integral = Math.sqrt(Math.PI);