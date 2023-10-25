// 材料の特性
var surfaceRoughness = 0.5; // 表面粗さ
var normalForce = 100; // 法線力 (N)

// 摩擦係数の計算
function calculateFrictionCoefficient(surfaceRoughness, normalForce) {
  var frictionCoefficient = surfaceRoughness / normalForce;
  return frictionCoefficient;
}

var friction = calculateFrictionCoefficient(surfaceRoughness, normalForce);
console.log("摩擦係数: " + friction);
