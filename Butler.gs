function ButlerVolmerEquation(T,E,E_standard) {

  var k0 = Math.pow(10, -3); // 電極反応速度定数 (A/cm^2/mol^m/s)
  var alpha = 0.5; // 電極反応の電子移動数

return k0 * Math.exp((alpha * Faraday_const * ( E - E_standard )) / (gas_const * T));
}

