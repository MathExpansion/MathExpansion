function calculateNernstPotential() {
  // 定数
  var R = 8.314; // ガス定数 (J/(mol*K))
  var F = 96485; // ファラデー定数 (C/mol)

  // イオンの濃度 (mol/L)
  var ionConcentrationInside = 0.01; // 内部の濃度
  var ionConcentrationOutside = 0.1; // 外部の濃度

  // 温度 (K)
  var temperature = 298; // 25°Cをケルビンに換算

  // イオンの電荷
  var ionCharge = 2; // 例: 2価のカチオン

  // Nernstの式を用いて電位を計算
  var nernstPotential = (R * temperature / (ionCharge * F)) * Math.log(ionConcentrationOutside / ionConcentrationInside);

  Logger.log("Nernst電位: " + nernstPotential + " V");
}

// Nernstの式を計算
calculateNernstPotential();
