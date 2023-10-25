function simulateMaxwellBoltzmannDistribution(T) {

  // シミュレーションのパラメータ
  var numberOfParticles = 1000; // 粒子数
  var mass = 1; // 粒子の質量

  // 速度分布を生成
  var velocities = generateMaxwellBoltzmannDistribution(numberOfParticles, T, mass);

  // 結果をスプレッドシートに表示
  var data = [];
  data.push(["Particle", "Velocity (m/s)"]);

  for (var i = 0; i < velocities.length; i++) {
    data.push([i + 1, velocities[i]]);
  }

  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}

// 速度分布を生成
function generateMaxwellBoltzmannDistribution(numberOfParticles, T, mass) {

  var velocities = [];

  for (var i = 0; i < numberOfParticles; i++) {
    // Maxwell-Boltzmann分布に従った速度生成
    var v = Math.sqrt((2 * k_b * K) / mass) * Math.sqrt(-2 * Math.log(Math.random()));
    velocities.push(v);
  }

  return velocities;
}
