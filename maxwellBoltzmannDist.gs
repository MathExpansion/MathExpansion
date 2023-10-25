function simulateMaxwellBoltzmannDistribution() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // シミュレーションのパラメータ
  var numberOfParticles = 1000; // 粒子数
  var temperature = 300; // 温度（K）
  var mass = 1; // 粒子の質量

  // 速度分布を生成
  var velocities = generateMaxwellBoltzmannDistribution(numberOfParticles, temperature, mass);

  // 結果をスプレッドシートに表示
  var data = [];
  data.push(["Particle", "Velocity (m/s)"]);

  for (var i = 0; i < velocities.length; i++) {
    data.push([i + 1, velocities[i]]);
  }

  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);

  Logger.log("Maxwell-Boltzmann速度分布をスプレッドシートに表示しました。");
}

// 速度分布を生成
function generateMaxwellBoltzmannDistribution(numberOfParticles, temperature, mass) {
  var kB = 1.380649e-23; // ボルツマン定数 (J/K)
  var velocities = [];

  for (var i = 0; i < numberOfParticles; i++) {
    // Maxwell-Boltzmann分布に従った速度生成
    var v = Math.sqrt((2 * kB * temperature) / mass) * Math.sqrt(-2 * Math.log(Math.random()));
    velocities.push(v);
  }

  return velocities;
}
