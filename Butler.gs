function ButlerVolmerEquation(T) {

  var k0 = Math.pow(10, -3); // 電極反応速度定数 (A/cm^2/mol^m/s)
  var electrodePotential = 0.2; // 電極電位 (V)
  var standardPotential = 0.1; // 電極の標準電位 (V)
  var alpha = 0.5; // 電極反応の電子移動数

return k0 * Math.exp((alpha * Faraday_const * (electrodePotential - standardPotential)) / (gas_const * T));
}

