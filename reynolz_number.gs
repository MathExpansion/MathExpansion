function calculateReynoldsNumber() {
  // 流体の密度 (kg/m^3)
  var fluidDensity = 1000;

  // 流速 (m/s)
  var fluidVelocity = 1;

  // 流体の粘度 (Pa*s)
  var fluidViscosity = 0.001;

  // 特定の長さ尺度 (例: 管の直径) (m)
  var lengthScale = 0.1;

  // Reynolds数の計算
  var reynoldsNumber = (fluidDensity * fluidVelocity * lengthScale) / fluidViscosity;

  Logger.log("Reynolds数: " + reynoldsNumber);
}

// Reynolds数を計算
calculateReynoldsNumber();
