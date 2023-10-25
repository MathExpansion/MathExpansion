function gibbsHelmholtzEnergy(temperature, enthalpy, entropy) {
  // ギブズ・ヘルムホルツエネルギーを計算
  var gibbsEnergy = enthalpy - (temperature * entropy);
  return gibbsEnergy;
}

// テスト用の値を指定
var temperature = 300; // 温度（K）
var enthalpy = 5000; // エンタルピー（J）
var entropy = 100; // エントロピー（J/K）

// ギブズ・ヘルムホルツエネルギーを計算
var result = gibbsHelmholtzEnergy(temperature, enthalpy, entropy);

// 結果をコンソールに出力
console.log("ギブズ・ヘルムホルツエネルギー: " + result);
