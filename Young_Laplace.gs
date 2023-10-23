// Young-Laplaceの式を再現する関数
function youngLaplace(radius, surfaceTension, densityInside, densityOutside) {
  // Young-Laplaceの式を計算
  var pressureDifference = (2 * surfaceTension) / radius;
  var deltaDensity = densityInside - densityOutside;
  var pressure = pressureDifference * deltaDensity;
  
  return pressure;
}

// テスト用のパラメータ
var dropletRadius = 0.1; // 液滴の半径 (単位: メートル)
var surfaceTension = 0.072; // 表面張力 (単位: ニュートン/メートル)
var densityInside = 1000; // 内部液体の密度 (単位: キログラム/立方メートル)
var densityOutside = 800; // 外部液体の密度 (単位: キログラム/立方メートル)

// Young-Laplaceの式を使用して圧力を計算
var pressure = youngLaplace(dropletRadius, surfaceTension, densityInside, densityOutside);

// 結果をログに出力
Logger.log("Young-Laplaceの式による圧力: " + pressure + " パスカル");
