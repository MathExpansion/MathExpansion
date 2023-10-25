function ButlerVolmerEquation(T) {

  // 電極反応速度定数 (A/cm^2/mol^m/s)
  var k0 = Math.pow(10, -3);

  // 電極電位 (V)
  var electrodePotential = 0.2;

  // 電極の標準電位 (V)
  var standardPotential = 0.1;

  // 電極反応の電子移動数
  var alpha = 0.5;

  // バトラーボルマーの式を用いて電流密度を計算
  var currentDensity = k0 * Math.exp((alpha * Faraday_const * (electrodePotential - standardPotential)) / (gas_const * T));
}

// Butler-Volmerの式を計算
ButlerVolmerEquation();
