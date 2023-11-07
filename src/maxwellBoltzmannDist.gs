/*
Copyright 2023 MathExpansion

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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